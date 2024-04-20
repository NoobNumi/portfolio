window.onload = function () {

  document.querySelectorAll('section:not(#offcanvasExample)').forEach(section => {
    observer.observe(section);
  });
}

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