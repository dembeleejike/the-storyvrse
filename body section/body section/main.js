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


const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

// Toggle menu when clicking hamburger
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove("active");
  }
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
          .classList.toggle("scrolled", window.scrollY > 50);
});


  