import { isMobile } from '../../../../../libs/detect-mobile-device.js';
import { getButtons, showButton } from '../video-buttons/video-buttons.js';
import { videoElementsWithButtons } from './video.js';

videoElementsWithButtons.forEach((video) => {
  const { playBtn, stopBtn } = getButtons(video);

  // show play-buttons by default
  if (isMobile()) {
    showButton(playBtn);
  }
});
