import { observeElements } from '../../../../libs/observe-elements.js';

const targets = [...document.querySelectorAll('[blur-transition]')];

const options = {
  threshold: 0.3,
};

// Toggle blur-effect for elements within viewport
const observer = observeElements(targets, {
  onAppear: (elem) => {
    elem.classList.add('un-blur');
  },
  onDisappear: (elem) => {
    elem.classList.remove('un-blur');
  },
  options,
});
