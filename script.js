"use strict";

// LOADING SCREEN
const loader = document.querySelector(".loader");

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.classList.add("loader-hidden");
  }, 3000);
});

// HAMBURGER MENU OPEN/CLOSE
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu");

menuBtn.addEventListener("click", function () {
  this.classList.toggle("fa-xmark");
  navbar.classList.toggle("nav-toggle");
});
