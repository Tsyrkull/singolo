// =================Header===============

let headerNavLinks = document.querySelectorAll('.nav-list__link');
let headerNav = document.querySelector('.header-nav');


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
        window.scrollTo(0, 0)
    } else if (target === headerNavLinks[1]) {
        window.scrollTo(0, 600)
    } else if (target === headerNavLinks[2]) {
        window.scrollTo(0, 1100)
    } else if (target === headerNavLinks[3]) {
        window.scrollTo(0, 1970)
    } else if (target === headerNavLinks[4]) {
        window.scrollTo(0, 2705)
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

// =========Portfolio

let portfolioNav = document.querySelector('.portfolio-nav');
let portfolioNavLinks = document.querySelectorAll('.portfolio-nav__link');
let imgContainer = document.querySelector('.portfolio-images');
let portfolioImgs = document.querySelectorAll('.portfolio__image');



portfolioNav.addEventListener('click', function () {
    portfolioNavLinks.forEach(el=>removeClass(el,'active-portfolio-link'));
    event.preventDefault();
    let target = event.target;
    if (target.tagName.toLowerCase() === 'a') {
        addClass(target, 'active-portfolio-link')
    }
});



imgContainer.addEventListener('click', function (event) {
    portfolioImgs.forEach(el=>removeClass(el,'active-img'));
    let target = event.target;
    if (target.tagName.toLowerCase() === 'img') {
        addClass(target, 'active-img')
    }
});



let filterAll = [...portfolioImgs].concat();
let filterVar1 = filterAll.concat().map((el,ind,arr) => ind ===arr.length-1 ? arr[0] : arr[ind+1]);
let filterVar2 = filterVar1.concat().map((el,ind,arr) => ind ===arr.length-1 ? arr[0] : arr[ind+1]);
let filterVar3 = filterVar2.concat().map((el,ind,arr) => ind ===arr.length-1 ? arr[0] : arr[ind+1]);


function useFilter(filterVariant){
    for (let value of filterVariant){
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









