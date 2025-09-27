// document.addEventListener("DOMContentLoaded", () => {
//     const transition = document.querySelector(".page-transition");
//     const links = document.querySelectorAll("a");

//     links.forEach(link => {
//         link.addEventListener("click", e => {
//             const target = link.getAttribute("href");

//             if (target && target.endsWith(".html")) {
//                 e.preventDefault();
//                 transition.classList.add("active");

//                 setTimeout(() => {
//                     transition.classList.add("fade-white");
//                 }, 1000);

//                 setTimeout(() => {
//                     window.location.href = target;
//                 }, 1600);
//             }
//         });
//     });
// });

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    const container = document.querySelector(".container");

    if (!loader || !container) return;

    setTimeout(() => {
        loader.classList.add("loader_active");
        container.classList.add("show");

        // bodyにloadedクラスを追加
        document.body.classList.add("loaded");
    }, 3000);
});
