import mapImage from '/assets/images/map.webp';
import markersData from './assets/data/markers.json';
import {battleIcon, darkIcon, deathIcon, dwarfIcon, elfIcon, encounterIcon, hobbitIcon, humanIcon} from "./mapIcons.js";

const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2
});

const bounds = [[0, 0], [4334, 5000]];
L.imageOverlay(mapImage, bounds).addTo(map);
map.fitBounds(bounds);

const cluster = L.markerClusterGroup({
    maxClusterRadius: 20
});
map.addLayer(cluster);

const createInfoDialog = (data) => {
    let info = ``;
    if (data.title) {
        info += `<h1 class="title">${data.title}`;
        if (data.sildarinTitle) {
            info += ` (${data.sildarinTitle})`
        }
        info += `</h1>`;
    }
    if (data.date) {
        info += `<h2 class="date">[${data.date}]</h2>`;
    }
    if (data.description) {
        info += `<p class="description">${data.description}</p>`;
    }
    if (data.infoLink) {
        info += `<span class="info-link-container"><a class="info-link" href="${data.infoLink}" target="_blank">Learn more on Tolkien Gateway</a></span>`;
    }
    return info;
}

const getFilters = () => {
    let filters = {
        'places': [],
        'events': [],
        'quests': [],
    };
    document.querySelectorAll('#filters fieldset').forEach(category => {
        category.querySelectorAll('input[type=checkbox]:checked').forEach(filter => {
            filters[filter.dataset.category].push(filter.dataset.filter);
        })
    });
    return filters;
}

const renderMarkersFromFilters = (filters) => {
    cluster.clearLayers();
    let isRendered = false;
    let markers = [];

    for (const m of markersData) {
        isRendered = false;
        for (const category of Object.keys(filters)) {
            for (const filter of filters[category]) {
                if (m.tags[category]?.includes(filter)) {
                    isRendered = true;
                }
            }
        }
        if (isRendered) {
            markers.push(createMarker(map, m).setBouncingOptions({
                elastic: false,
                bounceHeight: 8
            }).addEventListener('mouseover', function () {
                this.bounce(1)
            }));
        }

    }
    cluster.addLayers(markers)
}

const onFilterChange = (e) => {
    const element = e.target;
    if (element.dataset.filter === 'all') {
        document.querySelectorAll(`#filters-${element.dataset.category} input[type=checkbox]:not([data-filter=all])`).forEach(el => {
            if (element.checked) {
                el.checked = true;
                el.disabled = true;
            } else {
                el.checked = false;
                el.disabled = false;
            }
        })
    }
    renderMarkersFromFilters(getFilters());
}

const createMarker = (map, data) => {
    const sol = L.latLng([4334 - data.y, data.x]);
    let markerOptions = {
        title: data.title,
        alt: data.title,
    }
    if (data.tags?.events?.includes('battle')) {
        markerOptions.icon = battleIcon
    } else if (data.tags?.events?.includes('death')) {
        markerOptions.icon = deathIcon
    } else if (data.tags?.events?.includes('encounter')) {
        markerOptions.icon = encounterIcon
    } else if (data.tags?.places?.includes('dwarven')) {
        markerOptions.icon = dwarfIcon
    } else if (data.tags?.places?.includes('elven')) {
        markerOptions.icon = elfIcon
    } else if (data.tags?.places?.includes('human')) {
        markerOptions.icon = humanIcon
    } else if (data.tags?.places?.includes('dark')) {
        markerOptions.icon = darkIcon
    } else if (data.tags?.places?.includes('hobbit')) {
        markerOptions.icon = hobbitIcon
    }
    return L.marker(sol, markerOptions).bindPopup(createInfoDialog(data));
}

document.querySelectorAll('#filters input[type=checkbox]').forEach(element => {
    element.addEventListener('change', onFilterChange);
});

document.getElementById('open-btn').addEventListener('click', () => {
    document.getElementById('filters-container').classList.add('active');

});

document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('filters-container').classList.remove('active');
});

renderMarkersFromFilters(getFilters());