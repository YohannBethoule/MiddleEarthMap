const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2
});

const bounds = [[0, 0], [4334, 5000]];
const image = L.imageOverlay('assets/map.webp', bounds).addTo(map);

map.fitBounds(bounds);

let markersData = [];

const createInfoDialog = (data) => {
    let info = ``;
    if (data.title) {
        info += `<h1 class="title">${data.title}`;
        if (data.sildarinTitle) {
            info += ` (${data.sildarinTitle})`
        }
        info += `</h1>`;
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
        'places': []
    };
    document.querySelectorAll('#filters fieldset').forEach(category => {
        category.querySelectorAll('input[type=checkbox]:checked').forEach(filter => {
            filters[filter.dataset.category].push(filter.dataset.filter);
        })
    });
    return filters;
}

const clearMarkers = () => {
    map.eachLayer(function (layer) {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer)
        }
    })
}

const renderMarkersFromFilters = (filters) => {
    clearMarkers();
    let isRendered = false;
    let markers = L.layerGroup();
    let marker;
    for (const m of markersData) {
        isRendered = false;
        for (const category of Object.keys(filters)) {
            for (const filter of filters[category]) {
                if (m.tags[category].includes(filter)) {
                    isRendered = true;
                }
            }
        }
        if (isRendered) {
            marker = createMarker(map, m);
            markers.addLayer(marker);
        }
    }
    map.addLayer(markers);
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
    let marker = L.marker(sol, {
        title: data.title,
        alt: data.title,
        opacity: 0.8
    })
    marker.bindPopup(createInfoDialog(data))
    return marker;
}

fetch('./markers.json')
    .then((response) => response.json())
    .then((data) => {
        markersData = data;
        renderMarkersFromFilters(getFilters());
    });

document.querySelectorAll('#filters input[type=checkbox]').forEach(element => {
    element.addEventListener('change', onFilterChange);
});