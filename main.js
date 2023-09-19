// Check valid
const checkName = (e) => {
  const invalidCharacters = /^[a-zA-Z]*$/g;

  if (!e.value.match(invalidCharacters)) {
    errorElement(
      e,
      "field can't contain numbers or special characters(!, @, #, $)"
    );
  } else checkRemoveElement(e)
};

// Check valid
const checkEmail = (e) => {
  // TODO - Check if there is only one word
};

// Check valid
const checkPassword = (e) => {
  // TODO - Check if there is only one word
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
        checkLastName(e.target);
        break;
      case "checkPassword":
        checkLastName(e.target);
        break;
      case "lastName":
        checkLastName(e.target);
        break;
      case "lastName":
        checkLastName(e.target);
        break;
    }
  });
});
