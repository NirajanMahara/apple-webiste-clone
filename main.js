const selectElement = (element) => document.querySelector(element);

// toggle mobile menu
selectElement(".mobile-menu").addEventListener("click", () => {
  selectElement("header").classList.toggle("active");
});
