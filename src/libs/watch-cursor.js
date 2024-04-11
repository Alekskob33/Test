export function watchCursorInArea(container, { onMove, onOut }) {
  if (!(container instanceof HTMLElement)) return;

  container.onmouseover = ({ target }) => {
    target.onmousemove = ({ offsetX: x, offsetY: y }) => {
      onMove({ x, y });
    };
  };

  container.onmouseout = onOut;
}
