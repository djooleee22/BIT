var btn = document.querySelector("button");
var body = document.querySelector("body");
var turnOff = document.querySelector(".turn-off");
var isClicked = false;

function createColor() {
  if (isClicked === false) {
    var randomColor = Math.round(Math.random() * 255);
    var randomColor2 = Math.round(Math.random() * 255);
    var randomColor3 = Math.round(Math.random() * 255);

    body.style.backgroundColor = `rgb(${randomColor}, ${randomColor2}, ${randomColor3})`;
  }
}

function change() {
  createColor();
  // setInterval(createColor, 2000);
}

btn.addEventListener("click", change);

turnOff.addEventListener("click", function () {
  if (isClicked === false) {
    btn.removeEventListener("click", change);
    turnOff.innerText = "Turned Off";
    isClicked = true;
  } else {
    turnOff.innerText = "Turn off";
    btn.addEventListener("click", change);
    isClicked = false;
  }
});
