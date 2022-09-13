import { gameView } from '../utils/consts';

export function initMap({ pos, imgSrc }) {
    console.log('hellloooo!!!!');
    const imgFileStr = `/public/img/maps/${imgSrc}.jpg`;
    const map = document.createElement('div');
    var mapImg = new Image;

    mapImg.src = imgFileStr;
    mapImg.onload = function () {
        map.style.width = `${this.width}px`;
        map.style.height = `${this.height}px`;
        map.style.backgroundImage = `url(${imgFileStr})`;
        gameView.appendChild(map);
    };
}