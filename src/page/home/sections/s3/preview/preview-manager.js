import { observeElements } from '../../../../../libs/observe-elements.js';
import { animationManager } from './animator.js';
import { textElements } from './text-elements.js';

export default class previewManager {
  constructor() {
    this.textManager = textElements;
    this.animator = animationManager;

    if (this.animator.previewContainer) {
      this.observe();
    }
  }

  observe() {
    const elements = this.textManager.textElements;

    observeElements(elements, {
      onAppear: (el) => {
        this.textManager.updateCurrentIndex(el);

        const images = el.querySelectorAll('img[data-target-square]');
        this.updatePreview(images);
      },
      onDisappear: (el) => {
        if (this.textManager.isFinalElem(el)) {
          this.breakPreview();
        }
      },
      options: { threshold: 0.5 },
    });
  }

  updatePreview(images) {
    this.animator.showContainer();
    this.animator.hideAllImages();
    this.animator.showImages(images);
  }

  breakPreview() {
    this.textManager.visibleElemIndex = null;
    this.animator.hideContainer();
    this.animator.hideAllImages();
  }
}
