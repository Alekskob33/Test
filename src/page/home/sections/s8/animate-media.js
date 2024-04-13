import { random } from '../../../../libs/delay.js';
import { fadeIn, fadeOut } from '../../../../libs/fade-animation.js';
import { observeElements } from '../../../../libs/observe-elements.js';

const mediaElements = document.querySelectorAll(
  '.archive-item img, .archive-item video'
);

// Animate appearing img/video elements
const observer = observeElements(mediaElements, {
  onAppear: (el) => {
    const randomDelay = random({ from: 100, to: 700 });
    fadeIn(el, `300ms ease-in ${randomDelay}ms`);
  },
  onDisappear: (el) => {
    fadeOut(el, '300ms ease-out');
  },
  options: {
    threshold: 0.5,
  },
});
