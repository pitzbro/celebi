
import { mapObj, mapContainer } from "../utils/consts";

export default function initMove() {

    document.onkeydown = checkKeyDown;
    document.onkeyup = checkKeyUp;

    const speed = 12;

    function checkKeyDown(e) {

        e = e || window.event;

        switch (e.keyCode) {
            case 38:
                // up arrow
                player.dataset.direction = 'up';
                player.dataset.walk = 'true';
                mapMove('up');
                break;
            case 40:
                // down arrow
                player.dataset.direction = 'down';
                player.dataset.walk = 'true';
                mapMove('down');
                break;
            case 37:
                // left arrow
                player.dataset.direction = 'left';
                player.dataset.walk = 'true';
                mapMove('left');
                break;
            case 39:
                // right arrow
                player.dataset.direction = 'right';
                player.dataset.walk = 'true';
                mapMove('right');
                break;

            default:
                break;
        }

    }

    function checkKeyUp(e) {
        player.dataset.walk = 'false';
    }



    function mapMove(direction) {

        switch (direction) {
            case 'up':
                if (mapObj.y + speed <= mapObj.h / 4) mapObj.y += speed;
                moveMap();
                break;

            case 'down':
                if (mapObj.y - speed >= -mapObj.h / 4) mapObj.y -= speed;
                moveMap();
                break;

            case 'left':
                if (mapObj.x + speed <= mapObj.w / 4) mapObj.x += speed;
                moveMap();
                break;

            case 'right':
                if (mapObj.x - speed >= -mapObj.w / 4) mapObj.x -= speed;
                moveMap();
                break;

            default:
                break;
        }
    }
    function moveMap() {
        mapContainer.style.transform = `translate(${mapObj.x}px, ${mapObj.y}px)`;
    }
}
