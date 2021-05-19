// MENU
let menuBtn = document.querySelector('.header__btn');
let menu = document.querySelector('.home__column-3');
menuBtn.addEventListener('click', openMenu);


function openMenu(params) {
    menuBtn.classList.toggle('header__btn-active');
    menu.classList.toggle('home__column-3-active');
    // if (window.innerWidth < 641) {
        document.body.classList.toggle('lock');
    // }
}

// TABS
let titles = document.querySelectorAll('.gift__title');
let items = document.querySelectorAll('.gift__item');
titles.forEach((title) => 
    title.addEventListener('click', switchTab)
);
function switchTab(e) {
    e.preventDefault();
    const id = this.getAttribute('href').replace('#', '');
    titles.forEach((child) => child.classList.remove('gift__title-active'));  
    items.forEach((child) => child.classList.remove('gift__item-active'));
    this.classList.add('gift__title-active');
    document.getElementById(id).classList.add('gift__item-active');
}
// SLIDER
$(document).ready(function(){
    $('.slider').slick({
        rows: 2,
        slidesToShow: 1,
        infinite: false,
        variableWidth: true,
        responsive:[
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            }
    ],
    });
    $('.combo__slider').slick({
        rows: 1,
        slidesToShow: 1,
        infinite: false,
        variableWidth: true,
        responsive:[
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 400,
                settings: {
                    variableWidth: false,
                }
            }
    ],
    });
});


