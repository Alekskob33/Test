import debounce from '../../libs/debounce.js';

function setVh() {
  const vh = window.innerHeight / 100;
  document.body.style.setProperty('--vh', `${vh}px`);
  document.body.style.setProperty('--100vh', `${vh * 100}px`);
}
const setVhOnResize = debounce(setVh, { ms: 100 });

setVh();
window.onresize = setVhOnResize;
