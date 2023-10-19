const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");


function toggleMobileMenu(){
  header.classList.toggle("show-mobile-menu")
}

menuBtn.addEventListener("click", toggleMobileMenu);
closeMenuBtn.addEventListener("click", toggleMobileMenu);