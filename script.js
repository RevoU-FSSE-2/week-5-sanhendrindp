"use strict";

// LOADING SCREEN
const loader = document.querySelector(".loader");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.classList.add("loader-hidden");
  }, 3000);

  // loader.addEventListener("transitionend", function () {
  //   document.body.removeChild("loader");
  // });
});

// HAMBURGER MENU OPEN/CLOSE
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu");

menuBtn.addEventListener("click", function () {
  this.classList.toggle("fa-xmark");
  navbar.classList.toggle("nav-toggle");
});

// IMAGE GALLERY

document.querySelectorAll(".gallery-container img").forEach((image) => {
  image.onclick = function () {
    document.querySelector(".popup-gallery").style.display = "block";
    document.querySelector(".popup-gallery img").src =
      image.getAttribute("src");
    document.querySelector("nav").style.display = "none";
  };
});

document.querySelector(".popup-gallery i").onclick = function () {
  document.querySelector(".popup-gallery").style.display = "none";
  document.querySelector("nav").style.display = "flex";
};

// TYPED JS
// const typed = new Typed(".multiple-text", {
//   strings: ["IMAGE & DATA TAGGING", "CATEGORIZATION", "AUDIT"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   backDelay: 2000,
//   loop: true,
// });
