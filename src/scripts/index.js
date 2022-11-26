'use strict';

import '../styles/index.scss';

import initCharacter from './characters/initCharacters';
import initMove from './move/initMove';
import { initMap, } from './maps/initMaps';
import initTexts from './text/initTexts';


initCharacter();
initMap({imgSrc: 'beach'});
initMove();

initTexts('text1');