var modeBtn = document.querySelector(".mode");

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
