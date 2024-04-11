export function updatePosition(elem, { x, y }) {
  if (!elem) return;
  elem.style.setProperty('--x', `${x}px`);
  elem.style.setProperty('--y', `${y}px`);
}
