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

// FORM CONTACT
// var form = document.getElementById("my-form");

// async function handleSubmit(event) {
//   event.preventDefault();
//   var status = document.getElementById("my-form-status");
//   var data = new FormData(event.target);
//   fetch(event.target.action, {
//     method: form.method,
//     body: data,
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((response) => {
//       if (response.ok) {
//         status.innerHTML = "Thanks for your submission!";
//         form.reset();
//       } else {
//         response.json().then((data) => {
//           if (Object.hasOwn(data, "errors")) {
//             status.innerHTML = data["errors"]
//               .map((error) => error["message"])
//               .join(", ");
//           } else {
//             status.innerHTML = "Oops! There was a problem submitting your form";
//           }
//         });
//       }
//     })
//     .catch((error) => {
//       status.innerHTML = "Oops! There was a problem submitting your form";
//     });
// }
// form.addEventListener("submit", handleSubmit);
