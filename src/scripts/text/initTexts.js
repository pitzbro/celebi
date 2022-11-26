import { texts, } from "../utils/texts";

const infoPanel = document.querySelector('#info');
const textEl = infoPanel.querySelector('#info p');
const btnNext = document.querySelector('#action-btns .next');

let textPage = -1;
let currKey = null;

export function runTexts(key) {

    currKey = key;

    document.body.dataset.mode = 'text';

    setTimeout(updateText, 1000);

    btnNext.onclick = () => {
        updateText();
    };
}

export function updateText() {
    console.log('updateing');
    console.log('textPage', textPage);
    if (texts[currKey][textPage + 1]) {
        textPage += 1;
        infoPanel.classList.add('playing');
        infoPanel.classList.add('opened');
        textEl.innerHTML = texts[currKey][textPage];
    } else {
        textPage = -1;
        infoPanel.classList.remove('opened');
        document.body.dataset.mode = 'game';
        if(currKey === 'text2') {
            console.log('end', player);
            player.classList.add('heart');
        }
    }

}