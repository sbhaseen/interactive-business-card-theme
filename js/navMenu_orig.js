const navElementSelector = document.querySelector("nav");
const hamburgerMenuSelector = document.querySelector(".hamburger-container");

// Toggle the Nav Menu when clicked
hamburgerMenuSelector.addEventListener("click", () => {
  hamburgerMenuSelector.classList.toggle("change");
  navElementSelector.classList.toggle("open");
});

// Close the Nav Menu and reset hambuger menu if anything insed Nav is clicked
navElementSelector.addEventListener("click", () => {
  navElementSelector.classList.remove("open");
  hamburgerMenuSelector.classList.remove("change");
});
