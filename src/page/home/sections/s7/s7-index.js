import Tape from '../../../../libs/running-tape/js/tape.js';
import './s7.style.sass';

const archiveTapeElem = document.querySelector('.archive-tape');

if (archiveTapeElem) {
  const archiveTape = new Tape({
    rootElem: document.querySelector('.archive-tape'),
    cssGap: '0',
    speed: 1.3,
  });
  archiveTape.start();
}
