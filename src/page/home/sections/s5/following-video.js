const video = document.querySelector('#s5-video');
const titleContainer = document.querySelector('.s5 .title');

function watchCursorInArea(container, { onMove, onOut }) {
  if (!(container instanceof HTMLElement)) return;

  container.onmouseover = ({ target }) => {
    target.onmousemove = ({ offsetX: x, offsetY: y }) => {
      onMove({ x, y });
    };
  };

  container.onmouseout = onOut;
}

function updatePosition(elem, { x, y }) {
  elem.style.setProperty('--x', `${x}px`);
  elem.style.setProperty('--y', `${y}px`);
}

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
