
console.log('Hello World!');
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });


    window.addEventListener("scroll", () => {
        document.querySelector(".navbar")
        .classList.toggle("scrolled", window.scrollY > 50);
    });