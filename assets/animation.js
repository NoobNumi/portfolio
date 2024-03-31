window.onload = function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-up');
      }
    });
  });

  document.querySelectorAll('section:not(#offcanvasExample)').forEach(section => {
    observer.observe(section);
  });
}

function updateHeaderAnimation() {
  const header = document.querySelector('header');

  if (window.innerWidth >= 887) {
    header.classList.add('slide-up');
  } else {
    header.classList.remove('slide-up');
  }
}

window.addEventListener('resize', updateHeaderAnimation);
updateHeaderAnimation();

// Store current scroll position before closing offcanvas
let lastScrollPosition = 0;

function storeScrollPosition() {
  lastScrollPosition = window.scrollY || window.pageYOffset;
}

function restoreScrollPosition() {
  window.scrollTo(0, lastScrollPosition);
}

// Custom function to open offcanvas
function openOffcanvas() {
  const offcanvas = document.getElementById('offcanvasExample');
  const offcanvasBackdrop = document.querySelector('.offcanvas-backdrop');

  if (offcanvas && offcanvasBackdrop) {
    offcanvas.classList.add('show');
    offcanvasBackdrop.classList.add('show');
    storeScrollPosition();
  }
}

// Custom function to close offcanvas
function closeOffcanvas() {
  const offcanvas = document.getElementById('offcanvasExample');
  const offcanvasBackdrop = document.querySelector('.offcanvas-backdrop');

  if (offcanvas && offcanvasBackdrop) {
    offcanvas.classList.remove('show');
    offcanvasBackdrop.classList.remove('show');
    restoreScrollPosition();
  }
}