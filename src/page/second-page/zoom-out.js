import { observeElements } from '../../libs/observe-elements.js';
import { animateZoomOut, resetZoomOut } from '../../libs/zoom-out/zoom-out.js';

const zoomElements = [...document.querySelectorAll('[zoom-out]')];

const zoomOutObserver = observeElements(zoomElements, {
  onAppear: (elem) => {
    // BUG: it is blinking when element appears in viewport and animation is coming
    // it can cause infinite loop in browser
    animateZoomOut(elem);
  },
  onDisappear: (elem) => {
    resetZoomOut(elem);
  },
  options: {
    threshold: 0.2,
  },
});
