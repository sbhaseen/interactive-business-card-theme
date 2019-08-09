/* 
A function to contol the responsive navigation menu
*/
function openNav() {
  const navElementSelector = document.querySelector("nav");
  const hamburgerMenuSelector = document.querySelector(".hamburger-container");

  // Toggle the Nav Menu when clicked
  hamburgerMenuSelector.classList.toggle("change");
  navElementSelector.classList.toggle("open");

  // Handle Nav menu close if anything inside Nav is clicked
  navElementSelector.addEventListener(
    "click",
    function handleNavLinkClick() {
      // Close Nav Menu
      navElementSelector.classList.remove("open");
      // Reset hamburger menu
      hamburgerMenuSelector.classList.remove("change");
      // Removes eventlistener bound to function
      navElementSelector.removeEventListener("click", handleNavLinkClick, true);
    },
    true
  );
}
