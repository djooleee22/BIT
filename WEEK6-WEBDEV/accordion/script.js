var btnQuestion = document.querySelectorAll(".accordion-question");
var answer = document.querySelectorAll(".accordion-answer");

for (var i = 0; i < answer.length; i++) {
  btnQuestion[i].addEventListener("click", dodaj(i));
}

function dodaj(i) {
  return function () {
    answer[i].classList.toggle("hidden");
  };
}
