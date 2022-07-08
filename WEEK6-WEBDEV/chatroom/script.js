var btn1 = document.querySelector(".btn-1");
var btn2 = document.querySelector(".btn-2");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");

btn1.addEventListener("click", function (e) {
  if (input1.value !== "") {
    e.preventDefault();
    var message = document.createElement("div");
    message.classList.add("message");
    message.innerText = input1.value;
    box2.appendChild(message);
    var messageSent = document.createElement("div");
    messageSent.classList.add("message-sent");
    messageSent.innerText = input1.value;
    box1.appendChild(messageSent);
    input1.value = "";
  }
});

btn2.addEventListener("click", function (e) {
  if (input2.value !== "") {
    e.preventDefault();
    var message = document.createElement("div");
    message.classList.add("message");
    message.innerText = input2.value;
    box1.appendChild(message);
    var messageSent = document.createElement("div");
    messageSent.classList.add("message-sent");
    messageSent.innerText = input2.value;
    box2.appendChild(messageSent);
    input2.value = "";
  }
});
