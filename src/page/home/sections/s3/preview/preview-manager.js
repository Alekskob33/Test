import ViewportObserver from '../../../../../libs/observer/observer.js';
import PreviewAnimator from './preview-animator.js';

export default class AnimationManager {
  constructor() {
    this.visibleTextIndex = null;

    // DOM elements
    this.previewContainer = document.querySelector('.s3-fixed-container');
    this.textElements = document.querySelectorAll('.s3-text-box');
    // Observe
    this.viewportObserver = this.initObserver();
    this.viewportObserver.observeCollection(this.textElements);
    // Animator
    this.animator = new PreviewAnimator(this.previewContainer);
  }

  initObserver() {
    const observer = new ViewportObserver(this.handleIntersecting.bind(this), {
      threshold: 0.5,
    });
    return observer;
  }

  handleIntersecting(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting === true) {
        this.updateCurrentTextIndex(entry.target);

        const images = entry.target.querySelectorAll('img[data-target-square]');
        this.updatePreview(images);
      } else {
        if (this.isFinalElem(entry.target)) {
          this.breakPreview();
        }
      }
    });
  }

  updatePreview(images) {
    this.animator.showContainer();
    this.animator.hideAllImages();
    this.animator.showImages(images);
  }

  breakPreview() {
    this.visibleTextIndex = null;
    this.animator.hideContainer();
    this.animator.hideAllImages();
  }

  getElemIndex(elem) {
    const elemIndex = [...this.textElements].findIndex((el) => el === elem);
    return elemIndex === -1 ? null : elemIndex;
  }
  updateCurrentTextIndex(elem) {
    const currentElemIndex = this.getElemIndex(elem);
    this.visibleTextIndex = currentElemIndex;
  }
  isLastTextGone(elem) {
    const lastIndex = this.textElements.length - 1;
    const isLast = this.getElemIndex(elem) === lastIndex;

    return isLast && this.visibleTextIndex === lastIndex;
  }
  isFirstTextGone(elem) {
    const isFirst = this.getElemIndex(elem) === 0;
    return isFirst && this.visibleTextIndex === 0;
  }
  isFinalElem(elem) {
    return this.isFirstTextGone(elem) || this.isLastTextGone(elem);
  }
}
