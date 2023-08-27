//grab password grab confirm password
// test password = confirm password?
// Yes show


// function validatePassword() {
//   let password = document.getElementById("password").value;
//   let confirmPassword = document.getElementById("confirm_password").value;
//   let messageElement = document.querySelector(".message");

//   if (password == "") {
//     messageElement.innerHTML = "Always use protection!";
//   } else if (password != confirmPassword) {
//     messageElement.innerHTML = "Ho gotta try again mah Braddah!";
//     document.getElementById("password").classList.add("error");
//     document.getElementById("confirm_password").classList.add("error");
//   } else {
//     document.getElementById("password").classList.remove("error");
//     document.getElementById("confirm_password").classList.remove("error");
//     setInterval(submit(), 1000);
//   }
// }

// function submit() {
//   alert("Form submitted successfully");
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const passwordInput = document.getElementById("Password");
//   const confirmPasswordInput = document.getElementById("ConfirmPassword");
//   const createButton = document.querySelector(".button-container button");
//   const mismatchMessage = document.createElement("p");
//   mismatchMessage.className = "error-message";
//   confirmPasswordInput.addEventListener("input", function () {
//     if (passwordInput.value === confirmPasswordInput.value) {
//       mismatchMessage.textContent = "";
//       confirmPasswordInput.setCustomValidity("");
//     } else {
//       mismatchMessage.textContent = "* passwords do not match";
//       confirmPasswordInput.setCustomValidity("Passwords do not match");
//     }
//   });
//   createButton.addEventListener("click", function (event) {
//     if (passwordInput.value !== confirmPasswordInput.value) {
//       event.preventDefault(); // Prevent form submission
//       mismatchMessage.textContent = "Passwords do not match";
//     }
//   });
//   const formContainer = document.querySelector(".form-container");
//   formContainer.appendChild(mismatchMessage);
// });



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

