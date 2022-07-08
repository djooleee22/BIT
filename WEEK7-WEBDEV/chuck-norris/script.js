var select = document.querySelector("select");
var btn = document.querySelector("button");
var joke = document.querySelector(".joke");
var request = new XMLHttpRequest();
var categories;

window.addEventListener("load", function () {
  request.open("GET", "https://api.chucknorris.io/jokes/categories");
  request.send();

  request.onload = function () {
    categories = JSON.parse(request.responseText);
    console.log(categories);

    for (var i = 0; i < categories.length; i++) {
      var option = document.createElement("option");
      option.setAttribute("value", `${categories[i]}`);
      option.innerText = categories[i];
      select.appendChild(option);
    }
  };
});

btn.addEventListener("click", function () {
  request.open(
    "GET",
    `https://api.chucknorris.io/jokes/random?category=${select.value}`
  );
  request.send();
  request.onload = function () {
    joke.textContent = JSON.parse(request.responseText).value;
  };
});
