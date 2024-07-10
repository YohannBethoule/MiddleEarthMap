import {getMinZoomFromDevice, map} from "./map.js";

let osmMap;
let realWorldLayer;
let isRendered = false;

const OSM_ZOOM = 5.3

export const toggleRealWorldMap = () => {
    isRendered = !isRendered;
    if (isRendered) {
        renderRealWorldMap();
    } else {
        removeRealWorldMap();
    }
}

const renderRealWorldMap = () => {
    osmMap = L.map('osm-map', {
        minZoom: getZoomFromDevice(),
        maxZoom: getZoomFromDevice(),
        zoomControl: false,
        attributionControl: false,
    }).setView([46.01358283112393, 7.379250937736971], getZoomFromDevice());

    realWorldLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        opacity: 0.47,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(osmMap);

    map.setView([2167, 2500], getMinZoomFromDevice())
}

const removeRealWorldMap = () => {
    if (osmMap) {
        osmMap.remove();
        osmMap = null;
    }

    if (realWorldLayer) {
        realWorldLayer.remove();
        realWorldLayer = null;
    }

    const osmMapContainer = document.getElementById('osm-map');
    osmMapContainer.className = '';
    osmMapContainer.replaceWith(osmMapContainer.cloneNode(true));
}

const getZoomFromDevice = () => {
    if (window.innerWidth < 768) {
        return OSM_ZOOM / 1.7;
    } else {
        return OSM_ZOOM;
    }
}
