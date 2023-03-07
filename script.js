const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirmation");
const terms = document.getElementById("terms");
const errorContainer = document.querySelector(".errors");
const errorList = document.querySelector(".errors-list");

form.addEventListener("submit", (e) => {
  let errorMessages = [];
  clearErrors();

  if (username.value.length < 6) {
    errorMessages.push("Username must be at least 6 characters long!");
  }

  if (password.value.length < 10) {
    errorMessages.push("Password must be at least 10 characters long!");
  }

  if (password.value !== passwordConfirm.value) {
    errorMessages.push("Passwords must match!");
  }

  if (!terms.checked) {
    errorMessages.push("You must agree to the TOS!");
  }

  if (errorMessages.length > 0) {
    e.preventDefault();
    showErrors(errorMessages);
  }
});

function clearErrors() {
  while (errorList.children[0] != null) {
    errorList.removeChild(errorList.children[0]);
  }
  errorContainer.classList.remove("show");
}

function showErrors(errorMessages) {
  errorMessages.forEach((errorMessage) => {
    const li = document.createElement("li");
    li.innerText = errorMessage;
    errorList.appendChild(li);
  });
  errorContainer.classList.add("show");
}
