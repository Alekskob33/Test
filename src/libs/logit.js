import './logit.style.sass';

const logScreen = document.createElement('div');
logScreen.className = 'log-screen';
document.body.prepend(logScreen);

console.clear();

export function logit(labelText, value = '') {
  const logContent = `${labelText}: ${value}`;
  logScreen.insertAdjacentHTML('beforeEnd', `<p>${logContent}</p>`);

  console.log(logContent);
}

setTimeout(() => {
  logScreen.classList.add('finished');
}, 3000);
