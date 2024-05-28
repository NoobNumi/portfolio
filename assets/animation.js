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

const words = ["FRONT-END DEVELOPER", "GRAPHICS DESIGNER"];
let i = 0;
let timer;
let delayAfterTyping = 1000; // 1-second delay after typing

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById('word').innerHTML += word.shift();
      timer = setTimeout(loopTyping, 100); // Speed up typing
    } else {
      setTimeout(deletingEffect, delayAfterTyping); // Delay before deleting
    }
  };
  loopTyping();
};

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById('word').innerHTML = word.join("");
      timer = setTimeout(loopDeleting, 100); // Speed up deleting
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      }
      typingEffect();
    }
  };
  loopDeleting();
};

typingEffect();
