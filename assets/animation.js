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



document.addEventListener("DOMContentLoaded", function () {
  var myOffcanvas = document.getElementById('offcanvasExample');
  var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
  document.getElementById("OpenMenu").addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
    // Prevent scrolling back to top when closing the offcanvas
    bsOffcanvas._backdrop.style.display = "none";
    document.body.classList.add('offcanvas-open');
  });
});