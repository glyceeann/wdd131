// Put current year in footer
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Put last modified date in footer
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Get hamburger button + nav list
const menuBtn = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

// When hamburger is clicked, show/hide menu
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open"); // show/hide nav
  menuBtn.classList.toggle("open"); // change ☰ to ✕
});