// Show notification on page load
document.addEventListener('DOMContentLoaded', () => {
  const notification = document.getElementById('notification');
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 5000); // Hide after 5 seconds
});

// Hide Loading Screen
window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  loadingScreen.style.display = 'none';
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Enhanced Click-and-Drag Scrolling for Plans
const plansScrollContainer = document.querySelector('.plans-scroll-container');

let isDragging = false;
let startX, scrollLeft;

// Function to start dragging
const startDrag = (e) => {
  isDragging = true;
  startX = (e.pageX || e.touches[0].pageX) - plansScrollContainer.offsetLeft;
  scrollLeft = plansScrollContainer.scrollLeft;
  plansScrollContainer.style.cursor = 'grabbing'; // Change cursor to grabbing
  plansScrollContainer.style.scrollBehavior = 'auto'; // Disable smooth scrolling during drag
};

// Function to handle dragging
const handleDrag = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = (e.pageX || e.touches[0].pageX) - plansScrollContainer.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scroll speed
  plansScrollContainer.scrollLeft = scrollLeft - walk;
};

// Function to stop dragging
const stopDrag = () => {
  isDragging = false;
  plansScrollContainer.style.cursor = 'grab'; // Change cursor back to grab
  plansScrollContainer.style.scrollBehavior = 'smooth'; // Re-enable smooth scrolling
};

// Mouse Events
plansScrollContainer.addEventListener('mousedown', startDrag);
plansScrollContainer.addEventListener('mousemove', handleDrag);
plansScrollContainer.addEventListener('mouseup', stopDrag);
plansScrollContainer.addEventListener('mouseleave', stopDrag);

// Touch Events (for mobile devices)
plansScrollContainer.addEventListener('touchstart', startDrag);
plansScrollContainer.addEventListener('touchmove', handleDrag);
plansScrollContainer.addEventListener('touchend', stopDrag);

// Prevent overscrolling at the edges
plansScrollContainer.addEventListener('scroll', () => {
  if (plansScrollContainer.scrollLeft <= 0) {
    plansScrollContainer.scrollLeft = 0; // Prevent scrolling past the start
  } else if (
    plansScrollContainer.scrollLeft >=
    plansScrollContainer.scrollWidth - plansScrollContainer.clientWidth
  ) {
    plansScrollContainer.scrollLeft =
      plansScrollContainer.scrollWidth - plansScrollContainer.clientWidth; // Prevent scrolling past the end
  }
});