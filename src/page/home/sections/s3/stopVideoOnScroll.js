import { observeElements } from '../../../../libs/observe-elements.js';
import { hideButton, showButton } from './video-buttons.js';
import { allVideos, muteVideo, videoElements } from './video.js';

const options = {
  threshold: 0.3,
};

const observer = observeElements(allVideos, {
  onAppear: (videoElem) => {
    videoElem.play(); // performance optimization
  },
  onDisappear: (videoElem) => {
    const playBtn = videoElem.closest('div')?.querySelector('.play-button');
    const stopBtn = videoElem.closest('div')?.querySelector('.stop-button');

    videoElem.pause(); // performance optimization
    muteVideo(videoElem);

    if (!videoElem) return;

    if (playBtn && stopBtn) {
      showButton(playBtn);
      hideButton(stopBtn);
    }
  },
  options,
});
