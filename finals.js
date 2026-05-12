document.body.style.opacity = 0;

// When the page fully loads
window.addEventListener("load", () => {

  // Add smooth transition
  document.body.style.transition = "1s";

  // Show the page
  document.body.style.opacity = 1;

});