const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

let isNameValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isConfirmPasswordValid = false;

// NAME VALIDATION
nameField.addEventListener("input", () => {
  const value = nameField.value.trim();
  if (value.length < 5) {
    nameError.textContent = "Need at least 5 letters";
    emailField.disabled = true;
    isNameValid = false;
  } else {
    nameError.textContent = "";
    emailField.disabled = false;
    isNameValid = true;
  }
  toggleSubmitButton();
});

// EMAIL VALIDATION
emailField.addEventListener("input", () => {
  const value = emailField.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    emailError.textContent = "Enter a valid email";
    passwordField.disabled = true;
    isEmailValid = false;
  } else {
    emailError.textContent = "";
    passwordField.disabled = false;
    isEmailValid = true;
  }
  toggleSubmitButton();
});

// PASSWORD VALIDATION
passwordField.addEventListener("input", () => {
  const value = passwordField.value;
  if (value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    confirmPasswordField.disabled = true;
    isPasswordValid = false;
  } else {
    passwordError.textContent = "";
    confirmPasswordField.disabled = false;
    isPasswordValid = true;
  }
  toggleSubmitButton();
});

// CONFIRM PASSWORD VALIDATION
confirmPasswordField.addEventListener("input", () => {
  if (confirmPasswordField.value !== passwordField.value || confirmPasswordField.value === "") {
    confirmPasswordError.textContent = "Passwords do not match";
    isConfirmPasswordValid = false;
  } else {
    confirmPasswordError.textContent = "";
    isConfirmPasswordValid = true;
  }
  toggleSubmitButton();
});

// TOGGLE SUBMIT BUTTON BASED ON VALIDATION STATUS
function toggleSubmitButton() {
  submitBtn.disabled = !(isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid);
}

// FINAL SUBMIT
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form Submitted Successfully ✅");
  this.reset();
  resetFormState();
});

// RESET STATE ON SUBMIT
function resetFormState() {
  emailField.disabled = true;
  passwordField.disabled = true;
  confirmPasswordField.disabled = true;
  submitBtn.disabled = true;
  isNameValid = false;
  isEmailValid = false;
  isPasswordValid = false;
  isConfirmPasswordValid = false;
}
