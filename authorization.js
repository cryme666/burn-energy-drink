const email = document.getElementById("email");
const password = document.getElementById("password")
const password_again = document.getElementById("password_again")
const sbmt = document.getElementById("submit_button")



    // if(localStorage.getItem("authorization") === "true") 
    // {
    //     window.location.href = "./index.html";
    //     alert("You are already registered!");
    // }

    function isValidEmail(email) {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
      }


sbmt.addEventListener("click", () => {




    if(email.value === "")
    {
        alert("email is empty\ntry again")
        return false;
    }

    if (!isValidEmail(email.value)) {
        alert("Invalid email format");
        return false;;
      }

      if(email.value === localStorage.getItem("email"))
      {
          alert("you are already registered")
          return false;
      }


    if(password.value === "" || password_again.value === "")
    {
        alert("password is empty\ntry again")
        return false;
    }

    if(password.value.length < 5 || password.value.length > 15)
    {
        alert("password must be more 5 symbols and less than 15")
        return false;
    }


    if(password.value!=password_again.value)
    {
        alert("the password does not match");
        return false;
    }

    localStorage.setItem("authorization", "true");
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    window.location.href = "./login.html";
    alert("Authorization succesful!");



});