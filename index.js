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

const createMarker = (map, data) => {
    const sol = L.latLng([ 4334-data.y, data.x ]);
    L.marker(sol, {
        title: data.title,
        alt: data.title,
        opacity: 0.8
    }).addTo(map).bindPopup(createInfoDialog(data))
}

const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1
});

const bounds = [[0, 0], [4334, 5000]];
const image = L.imageOverlay('assets/map.webp', bounds).addTo(map);

map.fitBounds(bounds);

fetch('./markers.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        for (let d of data) {
            console.log(d)
            createMarker(map, d)
       }
    });



