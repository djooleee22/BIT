var input = document.querySelector("input");
var request = new XMLHttpRequest();
var name = document.querySelector(".name");
var img = document.querySelector("img");
window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    request.open("GET", `https://api.github.com/users/${input.value}`);
    request.send();

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        createAll(JSON.parse(request.responseText));
      }
    };
  }
});

function createAll(obj) {
  console.log(obj);
}
