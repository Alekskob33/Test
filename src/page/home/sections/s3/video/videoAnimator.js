export default class VideoAnimator {
  constructor() {
    this.subscribers = new Map();
  }

  fadeIn(elem) {
    this.#resetStyle(elem);
    elem.style.opacity = 0;
    elem.offsetHeight;

    elem.style.transition = 'opacity 1s linear';
    elem.style.opacity = 1;
  }

  fadeOut(elem) {
    this.#resetStyle(elem);
    elem.style.opacity = 1;
    elem.offsetHeight;

    elem.style.transition = 'opacity 1s linear';
    elem.style.opacity = 0;
  }

  rollUp(elem) {
    this.#resetStyle(elem);
    elem.style.clipPath = 'rect(0 100% 100% 0)'; // visible
    elem.offsetHeight;

    elem.style.transition = 'clip-path 1s linear';
    elem.style.clipPath = 'rect(0 100% 100% 100%)'; // hide
  }

  #resetStyle(elem) {
    elem.style = '';
    elem.offsetHeight; // trigger repainting
  }

  awaitAnimationEnd(elem, cb) {
    this.subscribers.set(elem, cb);
    this.#resetListeners();

    elem.addEventListener('transitionend', cb);
  }

  #resetListeners() {
    this.subscribers.forEach((cb, elem) => {
      elem.removeEventListener('transitionend', cb);
    });
  }
}
