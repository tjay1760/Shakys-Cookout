const openMenu= document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.drop-menu');
openMenu.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden-menu');

});