const tabContent = document.querySelectorAll('.tab-content');
const tabLinks = document.querySelectorAll('.tab-link');

/**
 * A function that will hide a previously open tab and set a new tab to active.
 * @param {string} tabName - Name of the tab that is clicked.
 * @param {Object} element - The HTML element that will be set to active.
 */
function openTab(tabName, element) {
  const currentTab = document.getElementById(tabName);

  // Hide all tab contents by default
  tabContent.forEach(tab => {
    tab.classList.add('hidden');
    tab.classList.remove('show');
  });

  // Remove active class styling on all link tabs
  tabLinks.forEach(link => link.classList.remove('active'));

  // Show the specific tab content
  currentTab.classList.remove('hidden');
  currentTab.classList.add('show');

  // Add the the active class styling to the clicked (open) link tab
  element.classList.add('active');
}

// Get the default element and open it
document.getElementById('defaultOpen').click();
