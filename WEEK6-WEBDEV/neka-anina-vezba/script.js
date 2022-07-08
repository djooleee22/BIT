var users = [
  {
    name: "Lorem Loric",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
    email: "loremloric@gmail.com",
  },
  {
    name: "Pera Peric",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "peraperic@gmail.com",
  },
  {
    name: "Marko Markovic",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    email: "markomarkovic@gmail.com",
  },
  {
    name: "Milos Ratkovic",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    email: "milosratkovic@gmail.com",
  },
  {
    name: "Milan Novakovic",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    email: "milannov@gmail.com",
  },
  {
    name: "Jovan Jovanovic",
    image: "https://randomuser.me/api/portraits/men/87.jpg",
    email: "jovanzmaj@gmail.com",
  },
  {
    name: "Ivan Ivanovic",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    email: "vecesaivanom@gmail.com",
  },
  {
    name: "Vuk Stefanovic",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    email: "karadzic@gmail.com",
  },
];

var images = [
  "https://randomuser.me/api/portraits/lego/5.jpg",
  "https://randomuser.me/api/portraits/lego/7.jpg",
  "https://randomuser.me/api/portraits/lego/1.jpg",
  "https://randomuser.me/api/portraits/lego/2.jpg",
  "https://randomuser.me/api/portraits/lego/3.jpg",
  "https://randomuser.me/api/portraits/lego/4.jpg",
  "https://randomuser.me/api/portraits/lego/6.jpg",
];

var modeBtn = document.querySelector(".mode");
var usersBox = document.querySelector(".users-box");
var ourteam = document.querySelector(".our-team");
var carouselImg = document.querySelector(".carousel-img");
var leftBtn = document.querySelector(".left");
var rightBtn = document.querySelector(".right");
var counter = 0;

function createHomePage() {
  for (var i = 0; i < users.length; i++) {
    var card = document.createElement("div");
    card.classList.add("card");

    var img = document.createElement("img");
    img.classList.add("user-img");
    img.setAttribute("src", users[i].image);

    var name = document.createElement("div");
    name.classList.add("name");
    name.innerText = users[i].name;

    var email = document.createElement("div");
    email.classList.add("email");
    email.innerText = users[i].email;

    card.append(img, name, email);
    usersBox.appendChild(card);
  }

  carouselImg.setAttribute("src", images[0]);
}

window.addEventListener("load", createHomePage);

if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
}

modeBtn.addEventListener("click", function () {
  if (
    localStorage.getItem("mode") === "light" ||
    localStorage.getItem("mode") === "null"
  ) {
    document.body.classList.add("dark");
    localStorage.setItem("mode", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("mode", "light");
  }
});

leftBtn.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    carouselImg.setAttribute("src", images[counter]);
  } else if (counter === 0) {
    counter = images.length - 1;
    carouselImg.setAttribute("src", images[counter]);
  }
});

rightBtn.addEventListener("click", function () {
  if (counter < images.length - 1) {
    counter++;
    carouselImg.setAttribute("src", images[counter]);
  } else if (counter === images.length - 1) {
    counter = 0;
    carouselImg.setAttribute("src", images[counter]);
  }
});
