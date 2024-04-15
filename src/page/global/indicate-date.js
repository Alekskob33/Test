export default function indicateDate(elem) {
  if (!elem) return;
  const today = new Date();

  // format date string
  const currentDate = today
    .toLocaleDateString('en-GB', {
      month: '2-digit',
      year: '2-digit',
    })
    .replace(/\//g, '—');

  // Indicate date
  elem.textContent = currentDate;
}
