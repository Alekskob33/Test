export default function debounce(fn, { ms }) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(args), ms);
  };
}
