export function watchCursorInArea(container, { onMove, onEnter, onOut }) {
  if (!(container instanceof HTMLElement)) return;

  container.onmouseover = ({ target }) => {
    onEnter();
    target.onmousemove = ({ offsetX: x, offsetY: y }) => {
      onMove({ x, y });
    };
  };

  container.onmouseout = onOut;
}
