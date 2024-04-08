import HeaderVideo from './video.js';

export default class MainVideo extends HeaderVideo {
  constructor(elem) {
    super(elem);
  }

  show() {
    this.video.style.clipPath = 'rect(0 0% 100% 0)';
    this.video.style.opacity = 1;

    setTimeout(() => {
      this.video.style.transition = 'clip-path 3s linear';
      this.video.style.clipPath = 'rect(0 100% 100% 0)';
    }, 0);
  }

  play() {
    this.video.muted = false;
    super.play();
  }
  stop() {
    super.stop();
  }
  offSound() {
    this.video.volume = 0;
  }
  onSound() {
    this.video.volume = 1;
  }
}
