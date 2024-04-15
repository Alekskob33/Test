import VideoAnimator from './videoAnimator.js';

export default class ShowcaseManager {
  constructor() {
    this.state = 'paused';

    this.mainPlayer = document.querySelector('#main-video');
    this.smallPlayer = document.querySelector('#small-video');
    this.playButton = document.querySelector('.play-button');

    this.animator = new VideoAnimator();

    if (this.isValidInput) {
      this.smallPlayerContainer = this.smallPlayer.closest('div');
      this.subscribeToClick();
    }
  }

  get isValidInput() {
    return this.mainPlayer && this.smallPlayer && this.playButton;
  }

  subscribeToClick() {
    if (this.playButton) {
      this.playButton.onclick = this.handleButtonClick.bind(this);
    }
    if (this.smallPlayer) {
      this.smallPlayer.onclick = this.handleSmallVideoClick.bind(this);
    }
  }

  handleButtonClick() {
    if (this.state === 'paused') {
      this.state = 'playing';
      this.showMainVideo();
      this.playButton.classList.add('playing');
    } else {
      this.state = 'paused';
      this.hideMainVideo();
      this.playButton.classList.remove('playing');
    }
  }

  handleSmallVideoClick() {
    if (this.state === 'paused') {
      this.handleButtonClick();
    }
  }

  showMainVideo() {
    this.animator.rollUp(this.smallPlayerContainer);

    this.animator.fadeIn(this.mainPlayer);
    this.mainPlayer.play();
    this.mainPlayer.volume = 1;

    this.animator.awaitAnimationEnd(this.smallPlayerContainer, () => {
      this.smallPlayer.pause();
    });
  }

  hideMainVideo() {
    this.animator.fadeOut(this.mainPlayer);
    this.animator.fadeIn(this.smallPlayerContainer);
    this.smallPlayer.play();

    this.mainPlayer.volume = 0;
    this.animator.awaitAnimationEnd(this.mainPlayer, () => {
      this.mainPlayer.pause();
    });
  }
}
