const checkboxes = Array.from(document.querySelectorAll(".theme__toggle"));
const darkText = document.querySelectorAll(".text-dark");
const footer = document.querySelector("footer");
const offCanvas = document.querySelector(".offcanvas");
const resume = document.querySelector(".resume-box");
const navbar = document.getElementById("navbar");

// Function to apply the dark mode styles
function applyDarkMode() {
  document.body.classList.add("bg-dark");
  document.body.classList.remove("bg-white");
  darkText.forEach((text) => {
    text.classList.add("text-secondary");
    text.classList.remove("text-dark");
  });
  document
    .querySelector(".theme__icon")
    .classList.add("theme__icon--transition");
  footer.classList.add("bg-dark");
  footer.classList.remove("bg-body-tertiary");
  offCanvas.classList.add("bg-dark");
  resume.classList.add("bg-dark");
  navbar.classList.add("bg-dark");
  navbar.classList.remove("bg-white");
}

// Function to apply the light mode styles
function applyLightMode() {
  document.body.classList.remove("bg-dark");
  document.body.classList.add("bg-white");
  darkText.forEach((text) => {
    text.classList.remove("text-secondary");
    text.classList.add("text-dark");
  });
  document
    .querySelector(".theme__icon")
    .classList.remove("theme__icon--transition");
  footer.classList.remove("bg-dark");
  footer.classList.add("bg-body-tertiary");
  offCanvas.classList.remove("bg-dark");
  resume.classList.remove("bg-dark");
  navbar.classList.remove("bg-dark");
  navbar.classList.add("bg-white");
}

// Get the stored theme preference from local storage
const storedTheme = window.localStorage.getItem("theme");
if (storedTheme === "bg-dark") {
  applyDarkMode();
  checkboxes.forEach((checkbox) => (checkbox.checked = true));
} else {
  applyLightMode();
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
}

// Function to toggle dark mode
function toggleDarkMode() {
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
      if (event.target !== checkbox) return;
      const otherCheckbox = checkboxes.find((other) => other !== checkbox);
      otherCheckbox.checked = checkbox.checked;

      if (checkbox.checked) {
        applyDarkMode();
        window.localStorage.setItem("theme", "bg-dark"); // Save the theme preference
      } else {
        applyLightMode();
        window.localStorage.setItem("theme", "bg-white"); // Save the theme preference
      }
    });
  });
}

// Call the function to set up the initial theme
toggleDarkMode();
