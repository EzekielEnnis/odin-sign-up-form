// Check valid first or last name
const checkName = (e) => {
  const invalidCharacters = /^[a-zA-Z]*$/g;

  if (!e.value.match(invalidCharacters)) {
    errorElement(
      e,
      "field can't contain numbers or special characters(!, @, #, $)"
    );
  } else checkRemoveElement(e);
};

// Check valid email
const checkEmail = (e) => {
  if (!e.value.match(/\@?\./)) {
    errorElement(e, "please use valid email format");
  }
  else checkRemoveElement(e);
};

// Check valid password
const checkPassword = (e) => {
  if (!e.value.match(/[A-Z]/) || !e.value.match(/[1-9]/) || !e.value.match(/[a-z]/)) {
    errorElement(
      e,
      "must contain at least one: digit, upper and lower case letter"
    );
  } else checkRemoveElement(e);
  
};

//Check valid confirm password
const checkConfPassword = (confPass, password) => {
  
    if (confPass.value !== password.value){
      errorElement(confPass, "doesn't match password")
    }
    else checkRemoveElement(confPass);
  };

const checkRemoveElement = (e) => {
  if (e.parentElement.lastChild.className == "error") {
    e.parentElement.lastChild.remove();
    e.style.cssText = "margin-bottom: 1.2rem;";
  }
};

//Create error text element
const errorElement = (e, text) => {
  checkRemoveElement(e);
  let errorMsg = document.createElement("p");
  errorMsg.classList.add("error");
  errorMsg.textContent = `* ${text}`;
  e.parentElement.appendChild(errorMsg);
  e.style.cssText = "margin-bottom: 0;";
};

//Toggle submit button if there are any errors
const toggleBtn = (e) => {};

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.name) {
      case "firstName":
        checkName(e.target);
        break;
      case "lastName":
        checkName(e.target);
        break;
      case "email":
        checkEmail(e.target);
        break;
      case "password":
        checkPassword(e.target);
        const confPass = document.querySelector("#confirmPass")
        checkConfPassword(confPass, e.target)
        break;
      case "confirmPass":
        const password = document.querySelector("#password")
        checkConfPassword(e.target, password);
        break;
    }
  });
});
