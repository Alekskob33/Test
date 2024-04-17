import { observeElements } from '../../libs/observe-elements.js';
import { showcaseManager } from '../home/sections/s1/module.js';

const videoCollection = document.querySelectorAll('video');

observeElements(videoCollection, {
  onAppear: (elem) => {
    if (elem.matches('#main-video')) return;
    elem.play();
  },
  onDisappear: (elem) => {
    if (elem.matches('#main-video')) {
      showcaseManager.activateDefaultState();
      // showcaseManager.mainPlayer.currentTime = 0;
    }
    elem.pause();
  },
  options: {
    threshold: 0.5,
  },
});
