import { fadeIn, fadeOut } from '../../libs/fade-animation.js';
import { observeElements } from '../../libs/observe-elements.js';

const autoFadeElements = document.querySelectorAll('.js-auto-fade');
const options = {
  threshold: 0.3,
};

// Auto-fade elements within viewport
const observer = observeElements(autoFadeElements, {
  onAppear: (el) => fadeIn(el, '900ms 0ms ease-in'),
  onDisappear: (el) => fadeOut(el, '300ms 0ms ease-out'),
  options,
});
