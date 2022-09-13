const gameView = document.querySelector('#game-view');

export default function initPlayer() {
    const player = document.createElement('div');
    player.setAttribute('id', 'player');
    gameView.appendChild(player);
}

export function initCharacter() {
    
}