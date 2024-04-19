import debounce from './debounce.js';

export default function onHorizontalResize(fn) {
  let prevViewportHeight = Math.floor(window.innerHeight);

  return debounce(
    () => {
      const newHeight = Math.floor(window.innerHeight);
      const diff = Math.abs(prevViewportHeight - newHeight);
      prevViewportHeight = newHeight; // update

      if (diff > 0) return;
      fn();
    },
    { ms: 100 }
  );
}
