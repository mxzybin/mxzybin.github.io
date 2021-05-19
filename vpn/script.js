let menuBtn = document.querySelector('.menu__btn');
let menuBody = document.querySelector('.header__nav');
let headInf = document.querySelector('.header__info');

menuBtn.addEventListener('click', openMenu)
function openMenu(params) {
    menuBtn.classList.toggle('menu__btn-active');
    menuBody.classList.toggle('header__nav-active');
    headInf.classList.toggle('header__info-active');
    document.body.classList.toggle('lock');
}
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', hideMenu);
  function hideMenu(params) {
    menuBtn.classList.remove('menu__btn-active');
    menuBody.classList.remove('header__nav-active');
    headInf.classList.remove('header__info-active');
    document.body.classList.remove('lock');
  }  
});

let plans = document.querySelectorAll('.plan__item');
plans.forEach(plan => {
    plan.addEventListener('click', switchPlan);
    function switchPlan(event) {
        plans.forEach((child) => child.classList.remove('plan__item-active'));
        this.classList.add('plan__item-active');
    }
});
// POPUP
let closeBtn = document.querySelector('.popup__close');
let openBtn = document.querySelector('#sub');
let popBody = document.querySelector('.popup');
let popBack = document.querySelector('.popup__back');

openBtn.addEventListener('click', openPopUp);
function openPopUp(e) {
  e.preventDefault();
  popBack.classList.add('popup__back-active');
  popBody.classList.add('popup-active');
  document.body.classList.add('lock');
}
closeBtn.addEventListener('click', closePopUp);
popBack.addEventListener('click', closePopUp);
function closePopUp(params) {
  popBack.classList.remove('popup__back-active');
  popBody.classList.remove('popup-active');
  document.body.classList.remove('lock');
}



// SLIDER
$('.reviews__slider-track').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
});