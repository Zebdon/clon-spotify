const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
    const isOpen = navLinks.classList.contains('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
});