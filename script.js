"use strict";

const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu");

menuBtn.addEventListener("click", function () {
  this.classList.toggle("fa-xmark");
  navbar.classList.toggle("nav-toggle");
});
