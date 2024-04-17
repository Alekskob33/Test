import { observeElements } from '../../../../../libs/observe-elements.js';
import { animationManager } from './animator.js';
import { textElements } from './text-elements.js';

export default class previewManager {
  constructor() {
    this.textManager = textElements;
    this.animator = animationManager.init();

    if (this.animator.previewContainer) {
      this.observe();
    }
  }

  observe() {
    const elements = this.textManager.textElements;

    observeElements(elements, {
      onAppear: (el) => {
        this.textManager.updateCurrentIndex(el);

        const mediaElem = el.querySelectorAll('[data-target-square]');
        this.updatePreview(mediaElem);
      },
      onDisappear: (el) => {
        if (this.textManager.isFinalElem(el)) {
          this.breakPreview();
        }
      },
      options: { threshold: 0.5 },
    });
  }

  updatePreview(mediaElements) {
    this.animator.showContainer();
    this.animator.hideAllMedia();
    this.animator.showMedia(mediaElements);
  }

  breakPreview() {
    this.textManager.visibleElemIndex = null;
    this.animator.hideContainer();
    this.animator.hideAllMedia();
  }
}
