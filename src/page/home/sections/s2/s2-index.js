import './s2.style.sass';
import Tape from '../../../../libs/running-tape/js/tape.js';
import '../../../../libs/running-tape/css/style.css';
const tapeContainer = document.querySelector('.header-tape');

export let tapeS2;

if (tapeContainer) {
  showSmoothly();

  tapeS2 = new Tape({
    rootElem: tapeContainer,
    cssGap: '0',
    speed: 1.3,
  });

  // Starts after preloader hides (tape is moving up)
  // tapeS2.start();
}

function showSmoothly() {
  tapeContainer.style.opacity = 0;

  setTimeout(() => {
    tapeContainer.style.transition = 'opacity 500ms';
    tapeContainer.style.opacity = 1;
  }, 500);
}
