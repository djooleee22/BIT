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
var wrapper = document.querySelector(".wrapper");

btn.addEventListener("click", reveal);

function reveal() {
  wrapper.classList.add("grid");
  for (var i = 0; i < data.length; i++) {
    var card = document.createElement("div");
    var h1 = document.createElement("h1");
    var h3 = document.createElement("h3");
    var list = document.createElement("ul");
    card.className = "card";
    h1.innerText = data[i].firstName;
    h3.innerText = data[i].age;
    for (var j = 0; j < data[i].hobbies.length; j++) {
      var li = document.createElement("li");
      li.innerText = data[i].hobbies[j];
      list.appendChild(li);
    }

    card.appendChild(h1);
    card.appendChild(h3);
    card.appendChild(list);
    wrapper.appendChild(card);
    btn.removeEventListener("click", reveal);
  }
}
