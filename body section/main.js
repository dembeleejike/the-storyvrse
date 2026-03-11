/*
console.log("hello World!");
const navLinks = document.getElementById("navLinks");
const overLay = document.getElementById("overlay");

function openMenu(){
    navLinks.classList.add("active");
    overLay.classList.add("active");

}

function closeMenu(){
    navLinks.classList.remove("active");
    overLay.classList.remove("active");

}
    */
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