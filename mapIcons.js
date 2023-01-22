import battleImg from './assets/swords.svg'
import deathImg from './assets/coffin.svg'
import encounterImg from './assets/eye.svg'
import hobbitImg from './assets/hobbit.svg'
import dwarfImg from './assets/dwarf.svg'
import elfImg from './assets/elf.svg'
import humanImg from './assets/castle.svg'
import darkImg from './assets/evil.svg'

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

export const hobbitIcon = L.icon({
    iconUrl: hobbitImg,

    iconSize: [30, 30],
    iconAnchor: [10, 20],
    popupAnchor: [5, -10]
});

export const dwarfIcon = L.icon({
    iconUrl: dwarfImg,

    iconSize: [30, 30],
    iconAnchor: [10, 20],
    popupAnchor: [5, -10]
});

export const elfIcon = L.icon({
    iconUrl: elfImg,

    iconSize: [30, 30],
    iconAnchor: [10, 20],
    popupAnchor: [5, -10]
});

export const humanIcon = L.icon({
    iconUrl: humanImg,

    iconSize: [30, 30],
    iconAnchor: [10, 20],
    popupAnchor: [5, -10]
});

export const darkIcon = L.icon({
    iconUrl: darkImg,

    iconSize: [30, 30],
    iconAnchor: [10, 20],
    popupAnchor: [5, -10]
});
