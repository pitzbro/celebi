import { texts, } from "../utils/texts";

const infoPanel = document.querySelector('#info');
const textEl = infoPanel.querySelector('#info p');
const btnNext = document.querySelector('#action-btns .next');

let textPage = 0;

export default function runTexts(key) {
    


    setTimeout(updateText, 1000);

    btnNext.onclick = () => {

        if (texts[key][textPage + 1]) {
            textPage += 1;
            updateText();
        } else {
            infoPanel.classList.remove('opened');
        }
    };

    
    function updateText() {
        infoPanel.classList.add('playing');
        infoPanel.classList.add('opened');
        textEl.innerHTML = texts[key][textPage];
    }
}