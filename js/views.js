/* 
A function to handle the displaying of contents for different tabs
*/
function openTab(tabName, element) {
  const tabContent = document.getElementsByClassName("tab-content");
  const tabLinks = document.getElementsByClassName("tab-link");
  const currentTab = document.getElementById(tabName);

  // Hide all tab contents by default
  for (let tab of tabContent) {
    tab.classList.add("hidden");
    tab.classList.remove("show");
  }

  // Remove active class styling on all link tabs
  for (let link of tabLinks) {
    link.classList.remove("active");
  }

  // Show the specific tab content
  currentTab.classList.remove("hidden");
  currentTab.classList.add("show");

  // Add the the active class styling to the clicked (open) link tab
  element.classList.add("active");
}

// Get the default element and open it
document.getElementById("defaultOpen").click();
