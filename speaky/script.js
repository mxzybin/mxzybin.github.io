let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.header__nav');

menuBtn.addEventListener('click', openMenu);

function openMenu(params) {
    document.body.classList.toggle('lock');
    menuBtn.classList.toggle('menu__btn-active');
       menu.classList.toggle('header__nav-active');
}