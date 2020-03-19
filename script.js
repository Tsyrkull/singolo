
// =================Header===============

let navLinks = document.querySelectorAll('.nav-list__link');
let startingIndex = 0;


navLinks[0].addEventListener('click', function() {
    event.preventDefault();
    location.hash = this.hash;
    window.scrollTo(0, 0)

});
navLinks[1].addEventListener('click', function() {
    event.preventDefault();
    location.hash = this.hash;
    window.scrollTo(0, 600);
});
navLinks[2].addEventListener('click', function() {
    event.preventDefault();
    location.hash = this.hash;
    window.scrollTo(0, 1100);
});
navLinks[3].addEventListener('click', function() {
    event.preventDefault();
    location.hash = this.hash;
    window.scrollTo(0, 1970);
});
navLinks[4].addEventListener('click', function() {
    event.preventDefault();
    location.hash = this.hash;
    window.scrollTo(0, 2705);
});

document.addEventListener('scroll', () => {

    if (window.pageYOffset < 600 ){
        navLinks[1].classList.remove('active-nav-link');
        navLinks[0].classList.add('active-nav-link')
    }
    else if (window.pageYOffset >= 600 && window.pageYOffset < 1100  ){
        navLinks[0].classList.remove('active-nav-link');
        navLinks[2].classList.remove('active-nav-link');
        navLinks[1].classList.add('active-nav-link')
    }
    else if (window.pageYOffset >= 1100 && window.pageYOffset < 1970  ){
        navLinks[1].classList.remove('active-nav-link');
        navLinks[3].classList.remove('active-nav-link');
        navLinks[2].classList.add('active-nav-link')
    }

    else if (window.pageYOffset >= 1970 && window.pageYOffset < 2705  ){
        navLinks[2].classList.remove('active-nav-link');
        navLinks[4].classList.remove('active-nav-link');
        navLinks[3].classList.add('active-nav-link');
    }

    else if (window.pageYOffset >= 2705){
        navLinks[3].classList.remove('active-nav-link');
        navLinks[4].classList.add('active-nav-link')
    }

});



