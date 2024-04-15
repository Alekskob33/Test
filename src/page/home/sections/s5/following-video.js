import { updatePosition } from '../../../../libs/element-position.js';
import { fadeIn, fadeOut } from '../../../../libs/fade-animation.js';
import { watchCursorInArea } from '../../../../libs/watch-cursor.js';

const video = document.querySelector('#s5-video');
const titleContainer = document.querySelector('.s5 .title');

if (video) fadeOut(video, '0ms'); // init

watchCursorInArea(titleContainer, {
  onMove: ({ x, y }) => {
    fadeIn(video, '300ms ease');

    const elemHeight = video.offsetHeight;
    const customIndent = 10;

    // Manually shift to top-right direction
    x = x - customIndent;
    y = y - elemHeight - customIndent;

    updatePosition(video, { x, y });
  },
  onOut: () => {
    fadeOut(video, '100ms ease');
  },
});
