import pathsData from "../assets/data/paths.json";
import {pathsLayer} from "./map.js";

export const renderPathsFromFilters = (filters) => {
    pathsLayer.clearLayers();
    for (const p of pathsData) {
        if (filters.paths.includes(p.id)) {
            const latLongs = p.path.map(l => [4334 - l[1], l[0]])
            const line = L.polyline(latLongs, {color: p.color, weight: 4})
            line.bindTooltip(pathTooltip(p), {
                sticky: true,
                className: "path-tooltip"
            }).addTo(pathsLayer);

            // Invisible wider line for easier interaction
            const interactionLine = L.polyline(latLongs, {color: 'transparent', weight: 40});
            interactionLine.bindTooltip(pathTooltip(p), {
                sticky: true,
                className: "path-tooltip",
                //offset: [0, -20]
            }).addTo(pathsLayer);
        }
    }
}

const pathTooltip = (path) => (
    `
        <div class="path-name">${path.name}</div> 
        <div class="path-date">[ ${path.startDate} - <br/> ${path.endDate} ]</div>
        <div class="path-distance">${path.distance}</div> 
    `
)