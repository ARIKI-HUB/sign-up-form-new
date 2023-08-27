//grab password grab confirm password
// test password = confirm password?
// Yes show
function validatePassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    let messageElement = document.querySelector(".message");
  
    if (password == "") {
      messageElement.innerHTML = "Always use protection!";
    } else if (password != confirmPassword) {
      messageElement.innerHTML = "Boo! Try again!";
      document.getElementById("password").classList.add("error");
      document.getElementById("confirm_password").classList.add("error");
    } else {
      document.getElementById("password").classList.remove("error");
      document.getElementById("confirm_password").classList.remove("error");
      setInterval(submit(), 1000);
    }
  }
  
  function submit() {
    alert("Form submitted successfully");
  }