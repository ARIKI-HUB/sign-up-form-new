



document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("Password");
  const confirmPasswordInput = document.getElementById("confirm_password");
  const createButton = document.querySelector(".button-container button");
  const mismatchMessage = document.createElement("p");
  mismatchMessage.className = "error-message";
  
  confirmPasswordInput.addEventListener("input", function () {
    if (passwordInput.value === confirmPasswordInput.value) {
      mismatchMessage.textContent = "";
    } else {
      mismatchMessage.textContent = "* Password dont match!";
    }
  });
  
  createButton.addEventListener("click", function (event) {
    if (passwordInput.value !== confirmPasswordInput.value) {
      event.preventDefault(); // Prevent form submission
      mismatchMessage.textContent = "Passwords do not match";
    }
  });

  const formContainer = document.querySelector(".form-container");
  formContainer.appendChild(mismatchMessage);
});

