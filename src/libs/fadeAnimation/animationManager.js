import FadeAnimation from './fadeAnimation.js';
import Observer from './observer.js';

export default class FadeAnimationManager {
  constructor(cssSelector) {
    this.targets = document.querySelectorAll(cssSelector);
    this.animator = new FadeAnimation();
    this.initObserver();
  }

  initObserver() {
    this.observer = new Observer(this.#intersectionHandler.bind(this), {
      threshold: 0.5,
    });

    for (let target of this.targets) {
      this.observer.observe(target);
    }
  }

  #intersectionHandler(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting === true) {
        return this.animator.fadeIn(entry.target);
      }
      if (entry.isIntersecting === false) {
        return this.animator.fadeOut(entry.target);
      }
    });
  }
}
