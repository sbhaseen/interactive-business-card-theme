/**
 * Controls for the navigation links on the page.
 */
const navElementSelector = document.querySelector('nav');
const hamburgerMenuSelector = document.querySelector('.hamburger-container');

// Toggle the Nav Menu when clicked
hamburgerMenuSelector.addEventListener('click', () => {
  hamburgerMenuSelector.classList.toggle('change');
  navElementSelector.classList.toggle('open');
});

// Handle Nav menu close if anything inside Nav is clicked
navElementSelector.addEventListener('click', () => {
  navElementSelector.classList.remove('open');
  hamburgerMenuSelector.classList.remove('change');
});
