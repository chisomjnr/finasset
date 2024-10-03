const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


ScrollReveal().reveal(".section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".section__description", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".section__description", {
  ...scrollRevealOption,
  delay: 900,
});


ScrollReveal().reveal(".header__container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".explore__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".finasset__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".offer__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".footer__logo", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".footer__col p", {
  ...scrollRevealOption,
  delay: 900,
});


const swiper = new Swiper(".swiper", {
  loop: true,
});
