const header = document.querySelector(".header");
const button = document.querySelector(".menu-toggle");
const cards = document.querySelector(".cards");
let menuLinks = document.querySelectorAll(".menu-nav__link");
let buttonBars = document.querySelectorAll(".menu-toggle > span");
const menu = document.querySelector(".menu");

button.addEventListener("click", function(event) {
  event.preventDefault();
  this.classList.toggle("active");
  header.classList.toggle("menu-is-open");
  menu.classList.toggle("is-open");
  cards.classList.toggle("inactive");
});
button.addEventListener("mouseover", function(event) {
  event.preventDefault();
  for (let i = 0; i < buttonBars.length; i++) {
    buttonBars[i].style.backgroundColor = "#a9842d";
  }
});
button.addEventListener("mouseout", function(event) {
  event.preventDefault();
  for (let i = 0; i < buttonBars.length; i++) {
    buttonBars[i].style.backgroundColor = "#805e0e";
  }
});

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function() {
    button.classList.remove("active");
    header.classList.remove("menu-is-open");
    menu.classList.remove("is-open");
    cards.classList.remove("inactive");
  });
}

// Fixed menu

function fixedNav() {
  if (window.pageYOffset) {
    document.body.style.paddingTop = header.offsetHeight + "px";
    header.classList.add("fixed");
  } else {
    document.body.style.paddingTop = 0;
    header.classList.remove("fixed");
  }
}

window.addEventListener("scroll", fixedNav);
