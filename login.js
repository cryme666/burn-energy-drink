if(localStorage.getItem("log-in") === "true") window.location.href = "./profile.html"; 

const email = document.getElementById("email");
const password = document.getElementById("password");
const entry = document.getElementById("entry");


function isValidEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

entry.addEventListener("click", () => {


    if (!isValidEmail(email.value)) {
        alert("Invalid email format");
        return false;
      }

    if(email.value != localStorage.getItem("email") || email.value === "")
    {
        alert("Incorrect data\nTry again!")
        return false;
    }


    if(password.value != localStorage.getItem("password") || password.value === "")
    {
        alert("Incorrect data\nTry again!")
        return false;
    }

    if(password.value.length < 5 || password.value.length > 15)
    {
        alert("password must be more 5 symbols and less than 15")
        return false;
    }

    localStorage.setItem("log-in","true");
    window.location.href = "./profile.html";
    alert("You login succefully!");



})
