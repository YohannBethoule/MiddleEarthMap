import {renderMarkersFromFilters} from "./markers.js";
import {renderPathsFromFilters} from "./paths.js";

const getFilters = () => {
    let filters = {
        'places': [],
        'events': [],
        'quests': [],
        'paths': [],
        'map-layers': [],
    };
    document.querySelectorAll('#filters fieldset').forEach(category => {
        category.querySelectorAll('input[type=checkbox]:checked').forEach(filter => {
            filters[filter.dataset.category].push(filter.dataset.filter);
        })
    });
    return filters;
}

export const onFilterChange = (e) => {
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
    renderFilters();
}

export const renderFilters = () => {
    const filters = getFilters();
    renderMarkersFromFilters(filters);
    renderPathsFromFilters(filters);
}
