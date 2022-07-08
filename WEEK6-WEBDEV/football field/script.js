var body = document.querySelector("body");
var image = document.querySelector("img");
var btn = document.querySelector("button");

body.addEventListener("click", function (event) {
  image.style.left = event.clientX + "px";
  image.style.top = event.clientY + "px";
  image.style.transform = "translate(-50%, -50%)";
  console.log(event);
});

btn.addEventListener("click", function (event) {
  event.stopPropagation();
  image.style.left = "10px";
  image.style.top = "10px";
  image.style.transform = "translate(0, 0)";
});
