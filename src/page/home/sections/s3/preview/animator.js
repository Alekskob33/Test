import { fadeIn, fadeOut } from '../../../../../libs/fade-animation.js';

export const animationManager = {
  previewContainer: document.querySelector('.s3-fixed-container'),

  insertImages(images) {
    const clones = [...images].map((img) => img.cloneNode(true));

    for (let img of clones) {
      const squareIndex = img.dataset.targetSquare - 1;
      const targetSquare =
        this.previewContainer.firstElementChild.children[squareIndex];
      targetSquare.replaceChildren(img);
    }

    return clones;
  },

  sortImages(images) {
    return images.sort(
      (img1, img2) => img1.dataset.targetSquare > img2.dataset.targetSquare
    );
  },

  showImages(images) {
    const clones = this.insertImages(images);
    const sortedImages = this.sortImages(clones);

    let timeout = 0;
    const interval = 500; // ms

    // Appear one-by-one (with interval)
    sortedImages.forEach((img) => {
      timeout += interval;

      setTimeout(() => {
        fadeIn(img);
      }, timeout);
    });
  },

  hideAllImages() {
    const images = this.previewContainer.querySelectorAll('img');
    for (let img of images) {
      fadeOut(img);
    }
  },

  showContainer() {
    this.previewContainer.classList.add('visible');
  },

  hideContainer() {
    this.previewContainer.classList.remove('visible');
  },
};
