import HeaderVideo from './video.js';

export default class MainVideo extends HeaderVideo {
  constructor(elem) {
    super(elem);
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
