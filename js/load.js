document.addEventListener("DOMContentLoaded", () => {
    const transition = document.querySelector(".page-transition");
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", e => {
            const target = link.getAttribute("href");

            if (target && target.endsWith(".html")) {
                e.preventDefault();
                transition.classList.add("active");


                setTimeout(() => {
                    transition.classList.add("fade-white");
                }, 1000);

                setTimeout(() => {
                    window.location.href = target;
                }, 1600);
            }
        });
    });
});
