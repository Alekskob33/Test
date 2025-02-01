import './s1.style.sass';

import { fadeIn, fadeOut } from '../../../../libs/fade-animation.js';
import { observeElements } from '../../../../libs/observe-elements.js';
import { disableAccessTo, enableAccessTo } from './toggleTargetsAccess.js';

(() => {
  const parentElement = document.querySelector('.js-fade-s1');
  if (!parentElement) return;

  // manipulated Elements
  const titleElement = parentElement.querySelector('.s1__title');
  const dotElement = parentElement.querySelector('.s1__dot');
  const textElement = parentElement.querySelector('.s1__text');

  const options = {
    threshold: 1,
  };

  // Auto-fade elements within viewport
  const observer = observeElements(parentElement, {
    onAppear: (el) => {
      if (titleElement) fadeIn(titleElement, '200ms 0ms ease-in');
      if (dotElement) fadeIn(dotElement, '200ms 0ms ease-in');
      if (textElement) fadeIn(textElement, '300ms 0ms ease-in');

      enableAccessTo([titleElement, dotElement, textElement]);
    },
    onDisappear: (el) => {
      if (titleElement) fadeOut(titleElement, '200ms 0ms ease-in');
      if (dotElement) fadeOut(dotElement, '200ms 0ms ease-in');
      if (textElement) fadeOut(textElement, '300ms 200ms ease-in');

      disableAccessTo([titleElement, dotElement, textElement]);
    },
    options,
  });
})();
