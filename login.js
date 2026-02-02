//Este archivo gestiona el comportamiento del formulario de login mediante JavaScript.
//Valida en tiempo real el nombre de usuario y la contraseña usando eventos.
//Controla la visualización u ocultación de la contraseña.
//Muestra u oculta el botón de envío según las condiciones de validación.
//Redirige al usuario a la página de películas cuando el formulario es correcto.

// Get elements
const username = document.getElementById("username");
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const submitBtn = document.getElementById("submitBtn");

const userCheck = document.getElementById("userCheck");
const lower = document.getElementById("lower");
const upper = document.getElementById("upper");
const number = document.getElementById("number");
const lengthCheck = document.getElementById("length");

const userInfo = document.getElementById("userInfo");
const passInfo = document.getElementById("passInfo");

// Show / hide password
showPassword.addEventListener("change", () => {
  password.type = showPassword.checked ? "text" : "password";
});

// Validate inputs on typing
username.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);

// Main validation function
function validateForm() {
  let validUser = username.value.includes("@");
  let validLower = /[a-z]/.test(password.value);
  let validUpper = /[A-Z]/.test(password.value);
  let validNumber = /[0-9]/.test(password.value);
  let validLength = password.value.length >= 8;

  update(userCheck, validUser);
  update(lower, validLower);
  update(upper, validUpper);
  update(number, validNumber);
  update(lengthCheck, validLength);

  if (validUser && validLower && validUpper && validNumber && validLength) {
    submitBtn.classList.remove("hidden");
    userInfo.classList.add("hidden");
    passInfo.classList.add("hidden");
  } else {
    submitBtn.classList.add("hidden");
    userInfo.classList.remove("hidden");
    passInfo.classList.remove("hidden");
  }
}

// Helper function to update text
function update(element, isValid) {
  element.className = isValid ? "good" : "bad";
  element.textContent = element.textContent.replace(/[✓✗].*/, isValid ? "✓ OK" : "✗ Not valid");
}

// Redirect on submit
document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  window.location.href = "pelis.html";
});
