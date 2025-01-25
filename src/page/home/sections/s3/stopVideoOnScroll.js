import { observeElements } from '../../../../libs/observe-elements.js';
import { hideButton, showButton } from './video-buttons.js';
import { muteVideo, videoElements } from './video.js';

const options = {
  threshold: 0.3,
};

const observer = observeElements(videoElements, {
  onAppear: (elem) => {},
  onDisappear: (elem) => {
    const playBtn = elem.closest('div')?.querySelector('.play-button');
    const stopBtn = elem.closest('div')?.querySelector('.stop-button');
    const videoElem = elem.closest('div')?.querySelector('video');

    if (!videoElem) return;

    if (playBtn && stopBtn) {
      showButton(playBtn);
      muteVideo(videoElem);

      hideButton(stopBtn);
    }
  },
  options,
});
