import battleImg from './assets/shield-and-swords.svg'
import deathImg from './assets/death.svg'
import encounterImg from './assets/eye.svg'

export const battleIcon = L.icon({
    iconUrl: battleImg,

    iconSize: [30, 30], // size of the icon
    iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -30] // point from which the popup should open relative to the iconAnchor
});

export const deathIcon = L.icon({
    iconUrl: deathImg,

    iconSize: [30, 30],
    iconAnchor: [10, 20],
    popupAnchor: [5, -20]
});

export const encounterIcon = L.icon({
    iconUrl: encounterImg,

    iconSize: [30, 30],
    iconAnchor: [10, 20],
    popupAnchor: [5, -10]
});