const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navActiveLinks = document.querySelectorAll(".nav-links a");
const currentUrl = window.location.href;

// Mobile navbar hamburger icon handling
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

// Loop through the links and add 'active' class to the current page link
navActiveLinks.forEach((link) => {
  if (link.href === currentUrl) {
    link.classList.add("active");
  }
});

// Form handling
function validateForm() {
  var email = document.getElementById("email").value;
  var confirmEmail = document.getElementById("confirmEmail").value;

  if (email !== confirmEmail) {
    alert("The email addresses do not match. Please try again.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
