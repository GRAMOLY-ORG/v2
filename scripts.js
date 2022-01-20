// const tl = gsap.timeline({defaults: {ease: 'power1.in'}})
// tl.to(".landing-header-slider", {x: "100%", duration: 3,})
// tl.to(".slider", {y: "-100%", duration: 1})
const tl = gsap.timeline({defaults: {ease: 'power1.in'}});
// tl.to(".one", {color: "rgba(255, 255, 255, 1)", duration: 1})
tl.to(".two", {color: "rgba(255, 255, 255, 1)", duration: 1.5});
tl.to(".slider", {y: "-100%", duration: 1, delay: 0.5});
tl.to(".home-hero", {opacity: "100%", duration: 1}, "-=0.5");
// tl.to(".logo-content", {y: "0%", opacity:"100%", duration: 1, stagger: 0.05}, "-=1");
// tl.to(".home-hero-nav-tab", {y: "0%", opacity:"100%", duration: 0.5, stagger: 0.1}, "-=1");

let vh = window.innerHeight * 0.01;

window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');
    let windowPosition1 = window.scrollY >= 90*vh;
    // if (windowPosition1) {
    //     console.log(window.scrollY, 100*vh);
    // }
    nav.classList.toggle('home-ann-nav', windowPosition1);
    let hr = document.querySelector('.home-ann-hr');
    hr.classList.toggle('home-ann-hr-active', windowPosition1);

    let windowPosition2 = window.scrollY >= 175*vh;
    nav.classList.toggle('home-tst-nav', windowPosition2);
    hr.classList.toggle('home-tst-hr-active', windowPosition2);

    let windowPosition3 = window.scrollY >= 390*vh;
    nav.classList.toggle('nav-rest', windowPosition3);
    hr.classList.toggle('hr-rest', windowPosition3);
})

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navmob = document.querySelector('.nav-mob')
    let hr = document.querySelector('.home-ann-hr');

    burger.addEventListener('click', () => {
        navmob.classList.toggle('nav-mob-active')
        burger.classList.toggle('burger-active')
        hr.classList.toggle('home-ann-hr-hide');
    });
}

navSlide();

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
