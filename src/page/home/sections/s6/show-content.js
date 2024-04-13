export default function showHiddenSections() {
  const hiddenSections = document.querySelectorAll('body > .hidden');
  [...hiddenSections].forEach((el) => el.classList.remove('hidden'));
}
