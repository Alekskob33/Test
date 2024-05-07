import { afterDelay } from '../../libs/delay.js';
import { observeElements } from '../../libs/observe-elements.js';
import { showcaseManager } from '../home/sections/s1/module.js';
import { logit } from './preloader/logit.js';

const videoCollection = document.querySelectorAll('video');

afterDelay(200, () => {
  observeElements(videoCollection, {
    onAppear: (elem) => {
      try {
        if (elem.matches('#main-video')) return;
        if (elem.matches('[autoplay]')) elem.play();
      } catch (error) {
        logit('onAppear', error);
      }
    },
    onDisappear: (elem) => {
      try {
        if (elem.matches('#main-video')) {
          showcaseManager.activateDefaultState();
          showcaseManager.mainPlayer.currentTime = 0;
        }
        elem.pause();
      } catch (error) {
        logit('onDisappear', error);
      }
    },
    options: {
      threshold: 0.5,
    },
  });
});

// * (a) avoid immediate play/stop when page has scrolled position on start
