const usernameInput = document.querySelector("#usernameInput");
const passwordInput = document.querySelector("#passwordInput");
const loginButton = document.querySelector("#loginButton");
const checkboxInput = document.querySelector("#checkboxInput");
const showPassButton = document.querySelector("#show-password-button");
const hidePassButton = document.querySelector("#hide-password-button");

showPassButton.addEventListener("click", function () {
  showPassButton.classList.add("d-none");
  hidePassButton.classList.remove("d-none");
  passwordInput.type = "text";
});
hidePassButton.addEventListener("click", function () {
    showPassButton.classList.remove("d-none");
    hidePassButton.classList.add("d-none");
    passwordInput.type="password";
});

loginButton.addEventListener("click", function () {
  console.log(usernameInput.value);
  console.log(passwordInput.value);
  
const user={
    'username': usernameInput,
    'password': passwordInput
}
localStorage.setItem("User",user);
});
