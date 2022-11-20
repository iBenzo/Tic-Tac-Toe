const togglePassword = document.querySelector(".p-viewer");
const password = document.querySelector("#password");
const togglePasswordConfirm = document.querySelector(".p-viewer2");
const passwordConfirm = document.querySelector("#confirm_password");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});

togglePasswordConfirm.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    passwordConfirm.getAttribute("type") === "password" ? "text" : "password";
  passwordConfirm.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});

var check = function () {
  if (
    document.getElementById("password").value ==
    document.getElementById("confirm_password").value
  ) {
    document.getElementById("confirm_password").style.border =
      "1px solid green";
    document.getElementById("password").style.border = "1px solid green";
    document.getElementById("confirm_password").placeholder = "passwords match";
  } else {
    document.getElementById("confirm_password").style.border = "1px solid red";
    document.getElementById("confirm_password").placeholder =
      "passwords do not match";
  }
};
