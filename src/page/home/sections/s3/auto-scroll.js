const playBtn = document.querySelector('.play-button');
const smallVideoContainer = document.querySelector('#small-video');

(() => {
  if (!playBtn || !smallVideoContainer) return;

  // Auto-scroll on click play
  [playBtn, smallVideoContainer].forEach((elem) => {
    elem.addEventListener('click', autoScrollUp);
  });
})();

function autoScrollUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
