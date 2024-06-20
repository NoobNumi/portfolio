const checkboxes = Array.from(document.querySelectorAll('.theme__toggle'));
const darkText = document.querySelectorAll('.text-dark');
const dots = document.querySelector('.dots');
const formControls = document.querySelectorAll('input, textarea');
const contactForm = document.querySelector('.php-email-form');
const card = document.querySelectorAll('.card');
const footer = document.querySelector('footer');
const offCanvas = document.querySelector('.offcanvas');

// Function to apply the dark mode styles
function applyDarkMode() {
    document.body.classList.add('bg-dark');
    document.body.classList.remove('bg-white');
    darkText.forEach(text => {
        text.classList.add('text-secondary');
        text.classList.remove('text-dark');
    });
    formControls.forEach(element => {
        element.classList.add('dark');
    });
    card.forEach(element => {
        element.classList.add('bg-dark');
    });
    document.querySelector('.theme__icon').classList.add('theme__icon--transition');
    dots.style.opacity = '0.1';
    contactForm.classList.add('bg-dark');
    footer.classList.add('bg-dark');
    footer.classList.remove('bg-body-tertiary');
    offCanvas.classList.add('bg-dark');
}

// Function to apply the light mode styles
function applyLightMode() {
    document.body.classList.remove('bg-dark');
    document.body.classList.add('bg-white');
    darkText.forEach(text => {
        text.classList.remove('text-secondary');
        text.classList.add('text-dark');
    });
    formControls.forEach(element => {
        element.classList.remove('dark');
    });
    card.forEach(element => {
        element.classList.remove('bg-dark');
    });
    document.querySelector('.theme__icon').classList.remove('theme__icon--transition');
    dots.style.opacity = '1';
    contactForm.classList.remove('bg-dark');
    footer.classList.remove('bg-dark');
    footer.classList.add('bg-body-tertiary');
    offCanvas.classList.remove('bg-dark');
}

// Get the stored theme preference from local storage
const storedTheme = window.localStorage.getItem('theme');
if (storedTheme === 'bg-dark') {
    applyDarkMode();
    checkboxes.forEach(checkbox => checkbox.checked = true);
} else {
    applyLightMode();
    checkboxes.forEach(checkbox => checkbox.checked = false);
}

// Function to toggle dark mode
function toggleDarkMode() {
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', (event) => {
            if (event.target !== checkbox) return;
            const otherCheckbox = checkboxes.find(other => other !== checkbox);
            otherCheckbox.checked = checkbox.checked;

            if (checkbox.checked) {
                applyDarkMode();
                window.localStorage.setItem('theme', 'bg-dark'); // Save the theme preference
            } else {
                applyLightMode();
                window.localStorage.setItem('theme', 'bg-white'); // Save the theme preference
            }
        });
    });
}

// Call the function to set up the initial theme
toggleDarkMode();
