let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".about-nav", 1, { y: 0})

let scene = new ScrollMagic.Scene({
  triggerElement: "main",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("main")
  .addTo(controller);

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navmob = document.querySelector('.nav-mob');
    const navmobcont = document.querySelector('.nav-mob-cont');

    burger.addEventListener('click', () => {
        navmob.classList.toggle('nav-mob-active');
        navmobcont.classList.toggle('nav-mob-cont-active');
        burger.classList.toggle('burger-active');
    });
}

navSlide();