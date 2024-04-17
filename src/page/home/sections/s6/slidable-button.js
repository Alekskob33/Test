import { ImgSlider } from '../../../../libs/img-slider/slider.js';

const slider = new ImgSlider().initSlider(
  document.querySelector('.animated-button')
);

if (slider.canRun) {
  slider.run(); // init

  slider.container.onmouseenter = slider.pause.bind(slider);
  slider.container.onmouseleave = slider.run.bind(slider);
  slider.container.onclick = slider.stop.bind(slider);
}
