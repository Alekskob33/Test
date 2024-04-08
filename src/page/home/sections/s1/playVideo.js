const playBtn = document.querySelector('.play-button');
const smallVideoElem = document.querySelector('#small-video');
const mainVideoElem = document.querySelector('#main-video');

(() => {
  if (!playBtn || !smallVideoElem) return;
  playBtn.onclick = toggleMainVideo;
})();

function toggleMainVideo() {
  if (mainVideoElem.paused) {
    mainVideoElem.play();
    playBtn.classList.toggle('paused');
  } else {
    if (mainVideoElem.readyState >= 3) {
      mainVideoElem.pause();
      playBtn.classList.toggle('paused');
    }
  }
}
