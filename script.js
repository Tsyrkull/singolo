// =================Header===============

let headerNavLinks = document.querySelectorAll('.nav-list__link');
let headerNav = document.querySelector('.header-nav');
let anchorHomeCoord = document.getElementById('home').getBoundingClientRect();
let anchorServicesCoord = document.getElementById('services').getBoundingClientRect();
let anchorPortfolioCoord = document.getElementById('portfolio').getBoundingClientRect();
let anchorAboutCoord = document.getElementById('about').getBoundingClientRect();
let anchorContactsCoord = document.getElementById('contacts').getBoundingClientRect();


function addClass(el, activeClass) {
    el.classList.add(activeClass)
}

function removeClass(el, activeClass) {
    el.classList.remove(activeClass)
}


headerNav.addEventListener('click', function (event) {

    event.preventDefault();

    let target = event.target;

    if (target === headerNavLinks[0]) {
        window.scrollTo(0, anchorHomeCoord.y - 90)
    } else if (target === headerNavLinks[1]) {
        window.scrollTo(0, anchorServicesCoord.y - 90)
    } else if (target === headerNavLinks[2]) {
        window.scrollTo(0, anchorPortfolioCoord.y - 90)
    } else if (target === headerNavLinks[3]) {
        window.scrollTo(0, anchorAboutCoord.y - 90)
    } else if (target === headerNavLinks[4]) {
        window.scrollTo(0, anchorContactsCoord.y - 90)
    }
});


window.addEventListener('scroll', function () {

    headerNavLinks.forEach(el => el.classList.remove('active-nav-link'));

    if (window.pageYOffset < 600) {
        addClass(headerNavLinks[0], 'active-nav-link')
    } else if (window.pageYOffset >= 600 && window.pageYOffset < 1100) {
        addClass(headerNavLinks[1], 'active-nav-link')
    } else if (window.pageYOffset >= 1100 && window.pageYOffset < 1970) {
        addClass(headerNavLinks[2], 'active-nav-link')
    } else if (window.pageYOffset >= 1970 && window.pageYOffset < 2705) {
        addClass(headerNavLinks[3], 'active-nav-link')
    } else if (window.pageYOffset >= 2705) {
        addClass(headerNavLinks[4], 'active-nav-link')
    }

});

// =========Slider===========

let slides = document.querySelectorAll('.slider__slide');
let activeSlide = 0;
let isEnabled = true;


let prevBtn = document.querySelector('.slider-buttons__button--prev');
let nextBtn = document.querySelector('.slider-buttons__button--next');

function changeActiveSlide(n) {
    activeSlide = (n + slides.length) % slides.length
}

function hideSlide(direction) {
    isEnabled = false;
    slides[activeSlide].classList.add(direction);
    slides[activeSlide].addEventListener('animationend', function () {
        this.classList.remove('slide-active', direction)
    })
}

function showSlide(direction) {
    slides[activeSlide].classList.add('slide-next', direction);
    slides[activeSlide].addEventListener('animationend', function () {
        this.classList.remove('slide-next', direction);
        this.classList.add('slide-active');
        isEnabled = true;

    })
}

function previousSlide(n){
    hideSlide('slide-to-right');
    changeActiveSlide(n-1);
    showSlide('slide-from-left')
}
function nextSlide(n){
    hideSlide('slide-to-left');
    changeActiveSlide(n+1);
    showSlide('slide-from-right');
}

prevBtn.addEventListener('click', function(){
    if(isEnabled){
        previousSlide(activeSlide)
    }

});

nextBtn.addEventListener('click', function(){
    if(isEnabled){
        nextSlide(activeSlide)
    }
});

let slide1 = document.querySelector('.slider__slide1');

slide1.addEventListener('click', function (event) {
   let target = event.target;
   console.log(target);
   if (target.tagName.toLowerCase() === 'img'){
       target.nextElementSibling.classList.toggle('display-off');
   } else if (target.classList.contains('slide1__img--off')){
       target.classList.toggle('display-off')
   }

});



// =========Portfolio===========

let portfolioNav = document.querySelector('.portfolio-nav');
let portfolioNavLinks = document.querySelectorAll('.portfolio-nav__link');
let imgContainer = document.querySelector('.portfolio-images');
let portfolioImgs = document.querySelectorAll('.portfolio__image');


portfolioNav.addEventListener('click', function () {
    portfolioNavLinks.forEach(el => removeClass(el, 'active-portfolio-link'));
    event.preventDefault();
    let target = event.target;
    if (target.tagName.toLowerCase() === 'a') {
        addClass(target, 'active-portfolio-link')
    }
});


imgContainer.addEventListener('click', function (event) {
    portfolioImgs.forEach(el => removeClass(el, 'active-img'));
    let target = event.target;
    if (target.tagName.toLowerCase() === 'img') {
        addClass(target, 'active-img')
    }
});


let filterAll = [...portfolioImgs].concat();
let filterVar1 = filterAll.concat().map((el, ind, arr) => ind === arr.length - 1 ? arr[0] : arr[ind + 1]);
let filterVar2 = filterVar1.concat().map((el, ind, arr) => ind === arr.length - 1 ? arr[0] : arr[ind + 1]);
let filterVar3 = filterVar2.concat().map((el, ind, arr) => ind === arr.length - 1 ? arr[0] : arr[ind + 1]);


function useFilter(filterVariant) {
    for (let value of filterVariant) {
        imgContainer.append(value)
    }
}

portfolioNavLinks[0].addEventListener('click', function () {
    useFilter(filterAll)

});
portfolioNavLinks[1].addEventListener('click', function () {
    useFilter(filterVar1)

});
portfolioNavLinks[2].addEventListener('click', function () {
    useFilter(filterVar2)

});
portfolioNavLinks[3].addEventListener('click', function () {
    useFilter(filterVar3)
});


//=========Get a quote=========
let form = document.querySelector('.contacts__feedback-form');
let subject = document.querySelector('.feedback-form__subject');
let description = document.querySelector('.feedback-form__description');
let modalMessage = document.querySelector('.form-message');
let subjectToShow = document.querySelector('.form-message__subject');
let descriptionToShow = document.querySelector('.form-message__description');
let btnToShow = document.querySelector('.form-message__btn');
let modalBlocker = document.querySelector('.modal-blocker');


form.onsubmit = function (){

    subject.value ? subjectToShow.textContent = `Subject: ${subject.value}`: subjectToShow.textContent = 'No subject';
    description.value ? descriptionToShow.textContent = `Description: ${description.value}` : descriptionToShow.textContent = 'No description' ;

    modalMessage.style.display = 'block';
    modalBlocker.style.display = 'block';

   event.preventDefault()

};

btnToShow.addEventListener('click', function () {
   form.reset();
    subjectToShow.textContent = null;
    descriptionToShow.textContent = null;
    modalMessage.style.display = 'none';
    modalBlocker.style.display = 'none';

});

//=========Burger Menu=========

let burgerMenu = document.querySelector('.burger-menu');
let navUl = document.querySelector('.nav-list');
let headerLogo = document.querySelector('.header-logo');

burgerMenu.addEventListener('click', function () {
    navUl.classList.toggle('nav-list-mobile');
    burgerMenu.classList.toggle('burger-menu-transform');
    headerLogo.classList.toggle('header-logo--mobile');
    modalBlocker.style.display = 'block';

});

headerNav.addEventListener('click', function () {
    burgerMenu.click();
    modalBlocker.style.display = 'none';
});









