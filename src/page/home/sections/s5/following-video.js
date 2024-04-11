import { updatePosition } from '../../../../libs/element-position.js';
import { watchCursorInArea } from '../../../../libs/watch-cursor.js';

const video = document.querySelector('#s5-video');
video.hidden = true;
const titleContainer = document.querySelector('.s5 .title');

watchCursorInArea(titleContainer, {
  onMove: ({ x, y }) => {
    const elemHeight = video.offsetHeight;
    const customIndent = 5;

    // Manually shift to top-right direction
    x = x + customIndent;
    y = y - elemHeight - customIndent;

    video.hidden = false;
    updatePosition(video, { x, y });
  },
  onOut: () => {
    video.hidden = true;
  },
});
