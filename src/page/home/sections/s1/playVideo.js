const playBtn = document.querySelector('.play-button');
const videoElem = document.querySelector('.s1-video');

(() => {
  if (!playBtn || !videoElem) return;

  playBtn.onclick = () => {
    if (videoElem.paused) {
      videoElem.muted = false;
      videoElem.play();
      playBtn.classList.toggle('paused');
    } else {
      if (videoElem.readyState >= 3) {
        videoElem.pause();
        playBtn.classList.toggle('paused');
      }
    }
  };
})();
