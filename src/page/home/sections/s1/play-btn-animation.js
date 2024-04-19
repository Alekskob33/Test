const playBtn = document.querySelector('.play-button');
const smallVideoElem = document.querySelector('#small-video');
const mainVideoElem = document.querySelector('#main-video');
import anime from 'animejs/lib/anime.es.js';

const pointsToPlay = [
  { value: '0 0, 10 8, 17 14, 10 20, 0 28' },
  { value: '0 0, 11 6.5, 23 14, 11 21.5, 0 28' },
  { value: '0 0, 28 0, 28 14, 28 28, 0 28' },
];

export const btnPlayAnimation = anime({
  targets: '.play-button .morph',
  points: pointsToPlay,
  easing: 'easeOutQuad',
  autoplay: false,
  duration: 300,
  complete: function (anim) {
    anim.reverse();
  },
});
