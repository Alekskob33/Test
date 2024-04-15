import './header.style.sass';
import Tape from '../../../../libs/running-tape/js/tape.js';

const tapeElem = document.querySelector('.ps1-running-tape');

if (tapeElem) {
  const headerTape = new Tape({
    rootElem: tapeElem,
    cssGap: '0',
    speed: 1.3,
  });

  // headerTape.start();
}
