export function afterDelay(ms, cb) {
  setTimeout(() => {
    cb();
  }, ms);
}

export function random({ from, to, precise = 2 }) {
  const delay = from + Math.random() * (to - from);
  return Number(delay.toFixed(precise));
}
