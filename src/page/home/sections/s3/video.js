import { initDefaultVideo } from './initDefaultVideo.js';
import { parallax } from './parallax.js';
import { renderButtonsForVideo } from './render-buttons.js';
import { scrollToCenter } from './scrollToCenter.js';
import { hideButton, showButton } from './video-buttons.js';

// Elements
export const allVideos = [...document.querySelectorAll('video')];

export const videoElements = allVideos.filter((videoEl) => {
  initDefaultVideo(videoEl);
  // renderButtonsForVideo(videoEl);

  if (videoEl.matches('[custom-controls]')) {
    renderButtonsForVideo(videoEl);
    return videoEl;
  }

  return false;
});

// Replay video
function restartVideo(videoElem) {
  videoElem.muted = false;
  videoElem.currentTime = 0;
  videoElem.play();
}

// Mute video
export function muteVideo(videoElem) {
  videoElem.muted = true;
}

// BUG: buttons are not visible on mobile
// because there is not mouseenter/mouseleave/mousemove events

// Handle click on buttons
document.addEventListener('click', ({ target }) => {
  const playBtn = target.closest('.play-button');
  const stopBtn = target.closest('.stop-button');
  const videoElem = target.closest('div')?.querySelector('video');

  if (!videoElem) return;

  if (playBtn) {
    restartVideo(videoElem);
    hideButton(playBtn);
    scrollToCenter(videoElem);
    return;
  }
  if (stopBtn) {
    muteVideo(videoElem);
    hideButton(stopBtn);
    return;
  }
});

// Handle events on video frame
videoElements.forEach((videoElem) => {
  const videoWrapper = videoElem.closest('div');
  let timerId;

  // Handle mouse-move (show stop-btn, and hide it after delay)
  videoWrapper.addEventListener(
    'mousemove',
    ({ clientX, clientY, currentTarget }) => {
      const playBtn = videoElem.closest('div').querySelector('.play-button');
      const stopBtn = videoElem.closest('div').querySelector('.stop-button');
      if (!videoElem || !stopBtn) return;

      // Parallax for play-button
      if (playBtn && playBtn.style.display !== 'none') {
        const { x, y } = {
          x: clientX - currentTarget.getBoundingClientRect().left,
          y: clientY - currentTarget.getBoundingClientRect().top,
        };
        parallax(playBtn, videoWrapper, { x, y });
      }

      // Show stop-button
      if (videoElem.muted) return;
      if (videoElem.paused) return;
      if (timerId) clearTimeout(timerId);
      showButton(stopBtn);

      // Hide after delay
      timerId = setTimeout(() => {
        console.log(timerId);
        hideButton(stopBtn);
      }, 2000);
    }
  );

  // Handle mouse-over (show play-btn)
  videoWrapper.addEventListener('mouseenter', () => {
    const playBtn = videoElem.closest('div').querySelector('.play-button');
    if (!videoElem || !playBtn) return;
    if (!videoElem.muted) return;
    console.log('mouse enter');

    // Show play-button
    showButton(playBtn);
  });

  // Handle mouse-leave (hide play-btn)
  videoWrapper.addEventListener('mouseleave', () => {
    const playBtn = videoElem.closest('div').querySelector('.play-button');
    const stopBtn = videoElem.closest('div').querySelector('.stop-button');

    // Hide play-button
    console.log('mouse leave');
    hideButton(playBtn);
    hideButton(stopBtn);
  });
});
