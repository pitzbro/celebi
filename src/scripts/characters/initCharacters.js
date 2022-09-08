const gameView = document.querySelector('#game-view');

export default function initPlayer() {
    console.log('Hello from the console sideeeeee...');
    const player = document.createElement('div');
    player.setAttribute('id', 'player');
    gameView.appendChild(player);

}

export function initCharacter() {
    
}

document.onkeydown = checkKeyDown;
document.onkeyup = checkKeyUp;

function checkKeyDown(e) {

    e = e || window.event;

    switch (e.keyCode) {
        case 38:
            // up arrow
            player.dataset.direction = 'up';
            player.dataset.walk = 'true';
            break;
        case 40:
            // down arrow
            player.dataset.direction = 'down';
            player.dataset.walk = 'true';
            break;
        case 37:
            // left arrow
            player.dataset.direction = 'left';
            player.dataset.walk = 'true';
            break;
        case 39:
            // down arrow
            player.dataset.direction = 'right';
            player.dataset.walk = 'true';
            break;
    
        default:
            break;
    }

}

function checkKeyUp(e) {
    player.dataset.walk = 'false';
}