import { fadeIn, fadeOut } from '../../../libs/fade-animation.js';
import { ImgSlider } from '../../../libs/img-slider/slider.js';
import { videoAwaiter } from './awaitMedia.js';
import './preloader.style.sass';

// Preloader node
const preloaderContainer = document.querySelector('#preloader');
const preloaderSlider = new ImgSlider({ interval: 150 }).initSlider(
  document.querySelector('.preloader-slider')
);
// Elements to await
const mediaContainer = document.querySelector('.js-await-media');
const awaitedMedia = document.querySelectorAll('.js-await-media video');
const runningTape = document.querySelector('.s2');

(() => {
  if (!preloaderContainer) return;
  // Await video loading
  videoAwaiter.awaitLoading(awaitedMedia, {
    onProgress: () => {
      fadeIn(preloaderSlider.container, '700ms');
      preloaderSlider.run();
    },
    onComplete: () => {
      preloaderSlider.stop();
      fadeOut(preloaderContainer, '1500ms');

      setTimeout(() => {
        preloaderContainer.remove();
      }, 1000);

      if (runningTape) {
        const tapeHeight = runningTape.offsetHeight;
        runningTape.style.marginTop = `${tapeHeight / -1.6}px`;
        runningTape.style.transform = 'translateY(50%)';

        runningTape.offsetHeight;
        runningTape.style.transition = 'transform 1000ms';
        runningTape.style.transform = 'translateY(0)';
      }
    },
  });
})();

// new AwaitLoading(awaitedMedia, () => {
//   preloaderContainer.remove();
//   preloaderSlider.stop();
// });
