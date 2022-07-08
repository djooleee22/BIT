var data = [
  { firstName: "Ana", age: 27, hobbies: ["running", "karate", "rudarenje"] },
  {
    firstName: "Martin",
    age: 26,
    hobbies: ["joga", "karaoke", "gledanje u sunce"],
  },
  {
    firstName: "Marko",
    age: 30,
    hobbies: ["cigare", "alkohol", "zene"],
  },
  {
    firstName: "Teodora",
    age: 30,
    hobbies: ["trcanje", "slikanje", "uzivanje"],
  },
  {
    firstName: "Milos",
    age: 28,
    hobbies: ["muzika", "sakupljanje sekundarnih sirovina", "klavir"],
  },
];

var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var h2 = document.querySelectorAll("h2");
var h3 = document.querySelectorAll("h3");
var h4 = document.querySelectorAll("h4");
var paragraphs = document.querySelectorAll("p");
var card = document.querySelectorAll(".card");
var list = document.querySelectorAll("ul");

btn.addEventListener("click", reveal);

function reveal() {
  h1.textContent = "TA-DAA";
  btn.classList.add("hidden");
  for (var i = 0; i < h2.length; i++) {
    h2[i].classList.add("hidden");
    card[i].classList.remove("bcgr-img");
    card[i].classList.add("bcgr-img2");
    h3[i].classList.remove("hidden");
    h3[i].textContent = data[i].firstName;
    h4[i].classList.remove("hidden");
    h4[i].textContent = `${data[i].age} godina`;
    list[i].classList.remove("hidden");
    for (var j = 0; j < data[i].hobbies.length; j++) {
      list[i].innerHTML += `<li>${data[i].hobbies[j]}</li>`;
    }
  }
}
