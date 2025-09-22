// const headImage = document.getElementById('headImage');

// let currentY = 0; 
// let targetY = 0;  

// window.addEventListener("scroll", () => {
//     targetY = window.scrollY * 0.1;
// });

// function animate() {
//     currentY += (targetY - currentY) * 0.5;

//     headImage.style.transform = `translateY(${currentY}px)`;

//     requestAnimationFrame(animate);
// }

// animate();

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// gsap.to("#headImage", {
//     y: 150,
//     ease: "power2.inOut",
//     scrollTrigger: {
//         trigger: ".head",
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//     }
// });

// gsap.to("#headTitle", {
//     y: -250,
//     ease: "power2.inOut",
//     scrollTrigger: {
//         trigger: ".head",
//         start: "0 0",
//         end: "bottom top",
//         scrub: true,
//     }
// });

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".head",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
    }
});

tl.to("#headTitle", { y: -600, ease: "power2.inOut" })
    .to("#headImage", { y: 130, ease: "power2.inOut" }, "<");

