import { random } from './delay.js';
import { fadeIn, fadeOut } from './fade-animation.js';
import { observeElements } from './observer-elements.js';

const mediaElements = document.querySelectorAll(
  '.s4-images-box img, .s4-images-box video'
);
console.log('🚀 ~ mediaElements:', mediaElements);
const options = {
  threshold: 0.5,
};

// Animate on viewport-intersection
const observer = observeElements(
  mediaElements,
  {
    onAppear: (el) => {
      const randomDelay = random({ from: 100, to: 700 });
      fadeIn(el, `300ms ${randomDelay}ms ease-in`);
    },
    onDisappear: (el) => fadeOut(el, '300ms ease-out'),
  },
  options
);
