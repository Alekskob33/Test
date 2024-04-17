import { fadeIn, fadeOut } from '../../../../../libs/fade-animation.js';

export const animationManager = {
  init() {
    this.previewContainer = document.querySelector('.s3-fixed-container');
    return this;
  },

  insertImages(mediaElem) {
    const clones = [...mediaElem].map((elem) => elem.cloneNode(true));

    for (let elem of clones) {
      const squareIndex = elem.dataset.targetSquare - 1;
      const targetSquare =
        this.previewContainer.firstElementChild.children[squareIndex];

      targetSquare.replaceChildren(elem);
    }

    return clones;
  },

  sortImages(mediaElements) {
    return mediaElements.sort(
      (elem1, elem2) => elem1.dataset.targetSquare > elem2.dataset.targetSquare
    );
  },

  showMedia(images) {
    const clones = this.insertImages(images);
    const sortedClones = this.sortImages(clones);

    let timeout = 0;
    const interval = 500; // ms

    // Appear one-by-one (with interval)
    sortedClones.forEach((mediaElem) => {
      timeout += interval;

      setTimeout(() => {
        fadeIn(mediaElem);
      }, timeout);
    });
  },

  hideAllMedia() {
    const mediaElements = this.previewContainer.querySelectorAll('img, video');
    for (let elem of mediaElements) {
      fadeOut(elem);
    }
  },

  showContainer() {
    this.previewContainer.classList.add('visible');
  },

  hideContainer() {
    this.previewContainer.classList.remove('visible');
  },
};
