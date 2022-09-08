const gameView = document.querySelector('#game-view');

export default function initPlayer() {
    console.log('Hello from the console sideeeeee...');
    const player = document.createElement('div');
    player.setAttribute('id', 'player');
    gameView.appendChild(player);

}

export function initCharacter() {
    
}