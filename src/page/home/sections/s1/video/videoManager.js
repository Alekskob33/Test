import MainVideo from './mainVideo.js';
import HeaderVideo from './video.js';

export default class VideoManager {
  constructor({ smallVideo, mainVideo }) {
    this.validated = this.isValidInput([smallVideo, mainVideo]);
    if (!this.validated) return;

    this.smallVideo = new HeaderVideo(smallVideo);
    this.mainVideo = new MainVideo(mainVideo);
    this.playBtn = document.querySelector('.play-button');

    this.init();
  }

  init() {
    if (this.playBtn && this.validated) {
      this.playBtn.onclick = this.handlePlayButton.bind(this);
    }
  }

  handlePlayButton() {
    if (this.mainVideo.isPaused) {
      this.clickPlay();
    } else {
      if (this.mainVideo.isReady) {
        this.clickStop();
      }
    }
  }

  clickPlay() {
    this.resetTransitionListening();

    this.mainVideo.show();
    this.mainVideo.play();
    this.mainVideo.onSound();
    this.toggleButtonState();

    this.awaitTransitionEnd(() => {
      this.smallVideo.stop();
      this.smallVideo.hide();
    });
  }

  awaitTransitionEnd(cb) {
    this.mainVideo.video.addEventListener(
      'transitionend',
      this.onTransitionEnd(() => {
        cb();
      })
    );
  }

  clickStop() {
    this.resetTransitionListening();

    this.mainVideo.hide();
    this.mainVideo.offSound();
    this.smallVideo.show();
    this.toggleButtonState();

    this.smallVideo.play();

    this.awaitTransitionEnd(() => {
      this.mainVideo.stop();
    });
  }

  onTransitionEnd(cb = () => {}) {
    cb();
  }

  resetTransitionListening() {
    this.mainVideo.video.removeEventListener(
      'transitionend',
      this.onTransitionEnd
    );
  }

  toggleButtonState() {
    if (this.playBtn) this.playBtn.classList.toggle('paused');
  }

  isValidInput(videoElements) {
    const isValid = videoElements.every((el) => el instanceof HTMLVideoElement);

    if (!isValid) console.log('Video elements are not valid');
    return isValid;
  }
}
