import battleImg from './assets/icons/swords.svg'
import deathImg from './assets/icons/coffin.svg'
import encounterImg from './assets/icons/eye.svg'
import hobbitImg from './assets/icons/hobbit.svg'
import dwarfImg from './assets/icons/dwarf.svg'
import elfImg from './assets/icons/elf.svg'
import humanImg from './assets/icons/castle.svg'
import darkImg from './assets/icons/evil.svg'

const iconSize = [30, 30];
const iconAnchor = [15, 30];
const popupAnchor = [3, -27];

export const battleIcon = L.icon({
    iconUrl: battleImg,

    iconSize: iconSize, // size of the icon
    iconAnchor: iconAnchor, // point of the icon which will correspond to marker's location
    popupAnchor: popupAnchor, // point from which the popup should open relative to the iconAnchor
    autoPanPaddingTopLeft: L.Point(1000, 1000)
});

export const deathIcon = L.icon({
    iconUrl: deathImg,
    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});

export const encounterIcon = L.icon({
    iconUrl: encounterImg,

    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});

export const hobbitIcon = L.icon({
    iconUrl: hobbitImg,

    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});

export const dwarfIcon = L.icon({
    iconUrl: dwarfImg,

    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});

export const elfIcon = L.icon({
    iconUrl: elfImg,

    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});

export const humanIcon = L.icon({
    iconUrl: humanImg,

    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});

export const darkIcon = L.icon({
    iconUrl: darkImg,

    iconSize: iconSize,
    iconAnchor: iconAnchor,
    popupAnchor: popupAnchor
});
