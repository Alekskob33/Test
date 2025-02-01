import { observeElements } from '../../libs/observe-elements.js';
import { animateZoomOut, resetZoomOut } from '../../libs/zoom-out/zoom-out.js';

const zoomElements = [...document.querySelectorAll('[zoom-out]')];

const zoomOutObserver = observeElements(zoomElements, {
  onAppear: (elem) => {
    animateZoomOut(elem);
  },
  onDisappear: (elem) => {
    resetZoomOut(elem);
  },
  options: {
    threshold: 0.2,
  },
});
