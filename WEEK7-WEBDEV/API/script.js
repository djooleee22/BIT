var btn = document.querySelector("button");
var request = new XMLHttpRequest();
var box = document.querySelector(".dog-box");
var img = document.querySelector("img");

function fetchDog() {
  request.open("GET", "https://dog.ceo/api/breeds/image/random");

  request.send();

  request.onload = function () {
    // console.log(JSON.parse(request.responseText));
    if (request.status >= 200 && request.status < 400) {
      createDogImage(JSON.parse(request.responseText));
    }
  };
}

function createDogImage(obj) {
  img.classList.remove("hidden");
  img.setAttribute("src", obj.message);
}

btn.addEventListener("click", fetchDog);
