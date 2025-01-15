window.onscroll = function () {
  makeNavbarSticky();
};

var sticky = navbar.offsetTop;

function makeNavbarSticky() {
  if (window.pageYOffset >= sticky) {
    document.getElementById("navbar").classList.add("position-fixed");
    document.getElementById("navbar").classList.remove("position-relative");
  } else {
    document.getElementById("navbar").classList.remove("position-fixed");
    document.getElementById("navbar").classList.add("position-relative");
  }
}
