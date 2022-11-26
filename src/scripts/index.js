'use strict';

import '../styles/index.scss';

import initCharacter from './characters/initCharacters';
import initMove from './move/initMove';
import { initMap, } from './maps/initMaps';
import { runTexts, } from './text/initTexts';


initCharacter();
initMap({imgSrc: 'beach'});
initMove();

runTexts('text1');