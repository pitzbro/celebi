
import { mapObj, mapContainer, } from '../utils/consts';
import { updateText, runTexts, } from '../text/initTexts';

export default function initMove() {

    document.onkeydown = checkKeyDown;
    document.onkeyup = checkKeyUp;

    const speed = 12;

    let pressedEnter = false;

    function checkKeyDown(e) {

        e = e || window.event;

        if (document.body.dataset.mode === 'game') {
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

        if (document.body.dataset.mode === 'text') {
            switch (e.keyCode) {
                // enter
                case 13:
                    console.log('enter');
                    if (!pressedEnter) updateText();
                    pressedEnter = true;
                    break;
                default:
                    break;
            }
        }



    }

    function checkKeyUp(e) {
        player.dataset.walk = 'false';

        
        e = e || window.event;

        switch (e.keyCode) {
            case 13:
                pressedEnter = false;
                break;
        }
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

    let reachedHeart = false;

    function moveMap() {

        if (!reachedHeart && mapObj.x <= -396 && mapObj.y >= 396) {
            reachedHeart = true;
            runTexts('text2');
        }
        mapContainer.style.transform = `translate(${mapObj.x}px, ${mapObj.y}px)`;
    }
}
