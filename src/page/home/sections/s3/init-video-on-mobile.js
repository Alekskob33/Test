import { isMobile } from '../../../../libs/detect-mobile-device.js';
import { getButtons, showButton } from './video-buttons.js';
import { videoElementsWithButtons } from './video.js';

/* 
TODO:
1. show play-buttons by default on mobiles (for video with buttons)

*/

videoElementsWithButtons.forEach((video) => {
  const { playBtn, stopBtn } = getButtons(video);

  // show play-buttons by default
  if (isMobile()) {
    showButton(playBtn);
  }
});
