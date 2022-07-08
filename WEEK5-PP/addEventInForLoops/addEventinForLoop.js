"use strict";

var btn = document.querySelectorAll(".btn");
var btnMinus = document.querySelectorAll(".btn-minus");
var number = document.querySelectorAll(".number");

for (var i = 0; i < number.length; i++) {
  handler(i);
}

function handler(index) {
  var counter = 0;

  function add() {
    counter++;
    number[index].innerText = counter;
  }

  function decrease() {
    counter--;
    number[index].innerText = counter;
  }

  btn[index].addEventListener("click", add);
  btnMinus[index].addEventListener("click", decrease);
}
