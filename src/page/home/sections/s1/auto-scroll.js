const playBtn = document.querySelector('.play-button');

(() => {
  if (!playBtn) return;

  playBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
