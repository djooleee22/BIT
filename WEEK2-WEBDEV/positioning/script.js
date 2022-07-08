"use strict";

var btn = document.querySelector(".btn-x");
var modal = document.querySelector("#modal");
var logo = document.querySelector(".logo");
var close = document.querySelector(".closing-modal");

btn.addEventListener("click", function () {
  modal.classList.toggle("modal-open");
  modal.classList.toggle("hide-modal");
});

logo.addEventListener("click", function () {
  modal.classList.toggle("modal-open");
  modal.classList.toggle("hide-modal");
});

close.addEventListener("click", function () {
  modal.classList.toggle("modal-open");
  modal.classList.toggle("hide-modal");
});
