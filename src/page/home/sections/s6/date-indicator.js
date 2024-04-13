(() => {
  const dateElement = document.querySelector('.js-date');
  if (!dateElement) return;
  const today = new Date();

  // format date string
  const currentDate = today
    .toLocaleDateString('en-GB', {
      month: '2-digit',
      year: '2-digit',
    })
    .replace(/\//g, '—');

  // Indicate date
  dateElement.textContent = currentDate;
})();
