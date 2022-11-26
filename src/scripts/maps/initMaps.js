import { mapContainer, mapObj } from '../utils/consts';

const mapWidth = 0;

export function initMap({ pos, imgSrc }) {
    const imgFileStr = `/public/img/maps/${imgSrc}.jpg`;
    const map = document.createElement('div');
    var mapImg = new Image;

    mapImg.src = imgFileStr;
    mapImg.onload = function () {
        map.style.width = `${this.width}px`;
        map.style.height = `${this.height}px`;
        map.style.backgroundImage = `url(${imgFileStr})`;
        map.setAttribute('id', 'map');
        mapContainer.style.transform = `translate(${mapObj.x}px, ${mapObj.y}px)`;
        mapContainer.appendChild(map);

        return map;
    };
}