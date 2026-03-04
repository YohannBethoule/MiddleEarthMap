import localMapImage from "../assets/images/map.webp";
import {renderFilters} from "./filters.js";

const cdnMapImage = "https://cdn.middleearthmap.app/map.webp";

const getMapImage = async () => {
    try {
        const response = await fetch(cdnMapImage, { method: 'HEAD' });
        if (response.ok) return cdnMapImage;
    } catch (_) {}
    return localMapImage;
}

export var map, cluster, pathsLayer;

export const loadMap = async () => {
    document.getElementById("lds-ring").style.display = 'inline-block';
    document.getElementById("load-btn").style.display = 'none';
    const mapImage = await getMapImage();
    map = L.map('middle-earth-map', {
        crs: L.CRS.Simple,
        minZoom: getMinZoomFromDevice(),
        maxZoom: 2
    });

    const bounds = [[0, 0], [4334, 5000]];
    L.imageOverlay(mapImage, bounds).addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById("lds-ring").style.opacity = '0';
            const loader = document.getElementById("loader-screen");
            loader.style.opacity = '0';
            loader.addEventListener('transitionend', () => loader.remove());
        }, 1500)
        renderFilters();
    }).addTo(map);

    map.fitBounds(bounds);

    cluster = L.markerClusterGroup({
        maxClusterRadius: 20
    });
    map.addLayer(cluster);

    pathsLayer = L.layerGroup([]);
    map.addLayer(pathsLayer)

    if (typeof window.trackCustomEvent === 'function') {
        window.trackCustomEvent('load map')
    }
}

export const getMinZoomFromDevice = () => {
    if (window.innerWidth < 768) {
        return -4;
    } else {
        return -2;
    }
}