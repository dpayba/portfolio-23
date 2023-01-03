// Select the container element
const container = document.querySelector('.container');

// Set a flag to track whether the elements have been loaded
let elementsLoaded = false;

// Add an event listener for the scroll event
window.addEventListener('scroll', function() {
  // Check if the container element is within the viewport
  if (isElementInViewport(container)) {
    if (!elementsLoaded) {
      // Create the HTML elements
      const element1 = document.createElement('div');
      element1.innerHTML = 'Element 1';
      const element2 = document.createElement('div');
      element2.innerHTML = 'Element 2';

      // Append the elements to the container
      container.appendChild(element1);
      container.appendChild(element2);

      // Set the flag to true to prevent the elements from being loaded again
      elementsLoaded = true;
    }
  } else {
    // Reset the flag to false if the container element is not in the viewport
    elementsLoaded = false;
  }
});

// Helper function to check if an element is within the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
