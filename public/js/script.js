// Carousel Animation in main page
let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 1;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

// Get all elements with the class "modal"
const modals = document.querySelectorAll('.modal');

// Iterate over each modal
modals.forEach(modal => {
  // Add an event listener for the "hide.bs.modal" event
  modal.addEventListener('hide.bs.modal', () => {
    // Store the current content of the modal
    const memory = modal.innerHTML;
    // Set the content of the modal to the stored memory
    modal.innerHTML = memory;
  });
});
