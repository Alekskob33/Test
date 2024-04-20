import { afterDelay } from '../../libs/delay.js';
import { observeElements } from '../../libs/observe-elements.js';
import { showcaseManager } from '../home/sections/s1/module.js';

const videoCollection = document.querySelectorAll('video');

// * (a)
afterDelay(200, () => {
  observeElements(videoCollection, {
    onAppear: (elem) => {
      if (elem.matches('#main-video')) return;
      if (elem.matches('[autoplay]')) elem.play();
    },
    onDisappear: (elem) => {
      if (elem.matches('#main-video')) {
        showcaseManager.activateDefaultState();
        showcaseManager.mainPlayer.currentTime = 0;
      }
      elem.pause();
    },
    options: {
      threshold: 0.5,
    },
  });
});

// * (a) avoid immediate play/stop when page has scrolled position on start
