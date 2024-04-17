import { updatePosition } from '../../../../libs/element-position.js';
import { fadeIn, fadeOut } from '../../../../libs/fade-animation.js';
import { watchCursorInArea } from '../../../../libs/watch-cursor.js';

const video = document.querySelector('#s5-video');
const titleContainer = document.querySelector('.s5 .title');

if (video) fadeOut(video, '0ms'); // init

watchCursorInArea(titleContainer, {
  onEnter: () => {
    fadeIn(video, '500ms ease');
    video.play();
  },
  onMove: ({ x, y }) => {
    const elemHeight = video.offsetHeight;
    const customIndent = 10;

    // Manually shift to top-right direction
    x = x - customIndent;
    y = y - elemHeight - customIndent;

    updatePosition(video, { x, y });
  },
  onOut: () => {
    fadeOut(video, '100ms ease');
    video.pause();
  },
});
