import {loadMap} from "./scripts/map.js";
import {onFilterChange} from "./scripts/filters.js";
import {toggleRealWorldMap} from "./scripts/realWorldMap.js";

const handleDonationClick = () => {
    if (typeof window.trackCustomEvent === 'function') {
        window.trackCustomEvent('donation click')
    }
}

document.querySelectorAll('#filters input[type=checkbox]').forEach(element => {
    element.addEventListener('change', onFilterChange);
});

document.getElementById('open-filters-btn').addEventListener('click', () => {
    document.getElementById('filters-container').classList.add('active');
});

document.getElementById('map-comparison-btn').addEventListener('click', () => {
    toggleRealWorldMap()
});

document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('filters-container').classList.remove('active');
});

document.getElementById('load-btn').addEventListener('click', loadMap);

document.getElementById('donation-link').addEventListener('click', handleDonationClick);

if (window.innerWidth > 840) {
    document.getElementById('filters-container').classList.add('active');
}
