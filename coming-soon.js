const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".cover", { opacity: "100%", duration: 1.5 });
tl.to("h1", { opacity: "100%", y: "0%", duration: 1 }, "+=0.5");
tl.to("h2", { opacity: "100%", y: "0%", duration: 1 });
tl.to("nav", { opacity: "100%", duration: 2 }, "+=0.5");
// tl.to("body", { opacity: "100%", duration: 1.5 });
// tl.to(".slider", { y: "-100%", duration: 1, delay: 0.5 });
// tl.to(".home-hero", { opacity: "100%", duration: 1 }, "-=0.5");
