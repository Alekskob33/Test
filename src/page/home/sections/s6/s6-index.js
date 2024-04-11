import './s6.style.sass';

(() => {
  const dateElement = document.querySelector('.js-date');
  if (!dateElement) return;

  const today = new Date();
  const currentDate = today
    .toLocaleDateString('en-GB', {
      month: '2-digit',
      year: '2-digit',
    })
    .replace(/\//g, '—');

  dateElement.textContent = currentDate;
})();
