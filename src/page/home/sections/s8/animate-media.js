import { random } from '../../../../libs/delay.js';
import { fadeIn, fadeOut } from '../../../../libs/fade-animation.js';
import { observeElements } from '../../../../libs/observe-elements.js';

const mediaElements = document.querySelectorAll(
  '.archive-item img, .archive-item video'
);

// Animate (fadeIn/fadeOut) img/video
const observer = observeElements(mediaElements, {
  onAppear: (el) => {
    const randomDelay = random({ from: 100, to: 700 });
    fadeIn(el, `300ms ease-in ${randomDelay}ms`);

    // When link visited (custom opacity)
    if (el.closest('a')?.matches('.visited')) {
      el.style.opacity = 0.2;
    }
  },
  onDisappear: (el) => {
    fadeOut(el, '300ms ease-out');
  },
  options: {
    threshold: 0.5,
  },
});
