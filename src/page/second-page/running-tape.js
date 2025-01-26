import './running-tape.sass';

import Tape from '../../libs/running-tape/js/tape.js';
import '../../libs/running-tape/css/style.css';

const tapeContainer = document.querySelector('.text-tape');
export let tapeS2;

if (tapeContainer) {
  tapeS2 = new Tape({
    rootElem: tapeContainer,
    cssGap: '0',
    speed: 0.7,
  });

  tapeS2.start();
}
