import MainVideo from './mainVideo.js';
import SmallVideo from './smallVideo.js';

export default class VideoManager {
  constructor({ smallVideo, mainVideo }) {
    this.validated = this.isValidInput([smallVideo, mainVideo]);
    if (!this.validated) return;

    this.smallVideo = new SmallVideo(smallVideo);
    this.mainVideo = new MainVideo(mainVideo);
    this.playBtn = document.querySelector('.play-button');

    this.init();
  }

  init() {
    if (this.playBtn && this.validated) {
      // Click on 'button' OR 'small-video'
      this.smallVideo.video.onclick = this.handleClickOnVideo.bind(this);
      this.playBtn.onclick = this.handlePlayButton.bind(this);
    }
  }
  handleClickOnVideo() {
    if (this.smallVideo.isPaused) return;
    this.handlePlayButton();
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
    this.smallVideo.hide();

    this.mainVideo.show();
    this.mainVideo.play();
    this.mainVideo.onSound();
    this.toggleButtonState();

    this.awaitTransitionEnd(() => {
      this.smallVideo.stop();
    });
  }

  clickStop() {
    this.resetTransitionListening();
    this.smallVideo.show();

    this.mainVideo.hide();
    this.mainVideo.offSound();
    this.toggleButtonState();

    this.smallVideo.play();

    this.awaitTransitionEnd(() => {
      this.mainVideo.stop();
    });
  }

  awaitTransitionEnd(cb) {
    this.smallVideo.video.addEventListener(
      'transitionend',
      this.onTransitionEnd(() => {
        cb();
      })
    );
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
