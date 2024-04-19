import debounce from '../../libs/debounce.js';
import onHorizontalResize from '../../libs/horizontal-resize.js';

function setVh() {
  const vh = window.innerHeight / 100;

  document.body.style.setProperty('--vh', `${vh}px`);
  document.body.style.setProperty('--100vh', `${vh * 100}px`);
}

setVh();
window.onresize = onHorizontalResize(setVh);
