
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Mobile navigation menu
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Green pledge button
const pledgeButton = document.getElementById("pledgeButton");
const pledgeMessage = document.getElementById("pledgeMessage");

pledgeButton.addEventListener("click", () => {
  pledgeMessage.textContent =
    "Thank you for taking the green pledge! 🌱 Protect nature every day.";
  pledgeButton.textContent = "✓ Pledge Taken";
});

// Contact form demonstration
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  if (!name) {
    formMessage.textContent = "Please enter your name.";
    return;
  }

  formMessage.textContent =
    `Thank you, ${name}! You are now part of the Green Earth mission. 🌳`;

  contactForm.reset();
});

// Display the current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Back-to-top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 350);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
