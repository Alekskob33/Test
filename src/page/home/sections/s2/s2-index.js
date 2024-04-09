import './s2.style.sass';
import Tape from '../../../../libs/running-tape/js/tape.js';
import '../../../../libs/running-tape/css/style.css';
const tapeContainer = document.querySelector('.header-tape');

if (tapeContainer) {
  showSmoothly();

  const tape = new Tape({
    rootElem: tapeContainer,
    cssGap: '0',
    speed: 1.3,
  });

  tape.start();
}

function showSmoothly() {
  tapeContainer.style.opacity = 0;

  setTimeout(() => {
    tapeContainer.style.transition = 'opacity 500ms';
    tapeContainer.style.opacity = 1;
  }, 500);
}
