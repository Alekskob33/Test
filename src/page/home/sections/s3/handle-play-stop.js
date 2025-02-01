import { isMobile } from '../../../../libs/detect-mobile-device.js';
import { scrollToCenter } from './scrollToCenter.js';
import { getButtons, hideButton, showButton } from './video-buttons.js';
import { muteVideo, restartVideo } from './video.js';

export function handlePlay(videoElem) {
  const { playBtn, stopBtn } = getButtons(videoElem);

  restartVideo(videoElem);
  hideButton(playBtn);
  scrollToCenter(videoElem);

  if (isMobile()) {
    // show stop-button (after click play-button)
    showButton(stopBtn);

    // auto-hide stop-button on mobile (delay 2sec)
    setTimeout(() => {
      hideButton(stopBtn);
    }, 2000);
  }
  return;
}

export function handleStop(videoElem) {
  const { stopBtn } = getButtons(videoElem);

  muteVideo(videoElem);
  hideButton(stopBtn);
}
