var usernameInp = document.querySelector(".username");
var passwordInp = document.querySelector(".password");
var btn = document.querySelector("button");
var userError = document.querySelector(".user-error");
var passError = document.querySelector(".pass-error");
var user = {
  username: "ana12",
  password: "qwerty",
};

btn.addEventListener("click", function () {
  if (
    usernameInp.value === user.username &&
    passwordInp.value === user.password
  ) {
    console.log("Logged in successfully");
  } else if (
    usernameInp.value === user.username &&
    passwordInp.value !== user.password
  ) {
    passError.textContent = "Wrong password";
  } else if (usernameInp.value !== user.username) {
    userError.textContent = "Wrong username";
    passError.textContent = "Wrong password";
  }
});
