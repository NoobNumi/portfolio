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
