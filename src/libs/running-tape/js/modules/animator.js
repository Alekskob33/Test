export default class Animator {
  #stepSize = 1;
  #paused = true;
  #_posX = 0;

  constructor({ container, stepSize = 1.35 }) {
    this.#stepSize = stepSize;
    this.direction = 'left';
    this.groupsContainer = container;
  }

  get positionX() {
    return this.#_posX;
  }

  set positionX(value) {
    this.#_posX = value;
    this.groupsContainer.style.setProperty('--x', `${value.toFixed(2)}px`);
  }

  #moveLeft() {
    this.positionX -= this.#stepSize;
  }
  #moveRight() {
    this.positionX += this.#stepSize;
  }

  #loop() {
    if (this.#paused) return;

    if (this.direction === 'left') {
      this.#moveLeft();
    } else {
      this.#moveRight();
    }
    requestAnimationFrame(this.#loop.bind(this));
  }
  start() {
    if (!this.#paused) return;

    this.#paused = false;
    this.#loop();
  }
  stop() {
    this.#paused = true;
    return this;
  }
  toggleDirection() {
    const currentDirection = this.direction;
    this.direction = currentDirection === 'left' ? 'right' : 'left';
    return this;
  }
}
