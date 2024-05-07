import debounce from '../../libs/debounce.js';
import onHorizontalResize from '../../libs/horizontal-resize.js';
import { logit } from './preloader/logit.js';

function setVh() {
  try {
    const vh = document.documentElement.clientHeight / 100;

    document.body.style.setProperty('--vh', `${vh}px`);
    document.body.style.setProperty('--100vh', `${vh * 100}px`);
  } catch (error) {
    logit('setVh', error);
  }
}

setVh();
window.onresize = onHorizontalResize(setVh);
