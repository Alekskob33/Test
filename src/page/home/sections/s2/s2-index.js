import './s2.style.sass';
import Tape from '../../../../libs/running-tape/js/tape.js';
import '../../../../libs/running-tape/css/style.css';

const tape = new Tape({
  rootElem: document.querySelector('.header-tape'),
  cssGap: '0',
  speed: 1.3,
});

// tape.start();
