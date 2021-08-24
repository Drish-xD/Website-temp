// intiialising AOS

AOS.init();

// Theme Toggler

var toggler = document.querySelector('.theme-toggle');
var selection = document.querySelectorAll('body, .drawer-list, .hamburger-icon, .notes-link, .btn, footer, .form input, .file-dummy');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('dawn');
    toggler.classList.toggle('dusk');
    selection.forEach(function (element) {
        element.classList.toggle("light");
        element.classList.toggle("dark");
    });
    document.querySelector('.main-img').classList.toggle('normal');
    document.querySelector('.main-img').classList.toggle('invert');
});

// Overflow hidden 

var menu = document.querySelector('.hamburger-icon');
menu.addEventListener('click', () => {
    document.body.classList.toggle('normal');
    document.body.classList.toggle('hidden');
});