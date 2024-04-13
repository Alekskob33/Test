const links = document.querySelectorAll('.s8 .archive-item a');

/* Add class '.visited' when clicked 
allows to apply custom-opacity for 'animate-media.js' */

[...links].forEach((link) => {
  link.onclick = () => link.classList.add('visited');
});
