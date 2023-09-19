// Check valid
const checkFirstName = (e) => {
    errorElement(e, "one name only")
    // TODO - Check if there is only one word
    // TODO - Check if there is currently an error message to avoid doubling up
}

// Check valid
const checkLastName = (e) => {
    
    // TODO - Check if there is only one word
    // TODO - Check if there is currently an error message to avoid doubling up
}

// Check valid
const checkEmail = (e) => {
    
    // TODO - Check if there is only one word
}

// Check valid
const checkPassword = (e) => {
    
    // TODO - Check if there is only one word
}

//Create error text element
const errorElement = (e, text) => {
    let errorMsg = document.createElement("p")
    errorMsg.classList.add("error")
    errorMsg.textContent = `* ${text}`
    e.parentElement.appendChild(errorMsg)
} 

//Toggle submit button if there are any errors
const toggleBtn = e => {

}

const inputs = document.querySelectorAll("input")
inputs.forEach((input) => {
    input.addEventListener("input", e => {
        switch(e.target.name){
            case ("firstName"): checkFirstName(e.target); break
            case ("lastName"): checkLastName(e.target); break
            case ("email"): checkLastName(e.target); break
            case ("checkPassword"): checkLastName(e.target); break
            case ("lastName"): checkLastName(e.target); break
            case ("lastName"): checkLastName(e.target); break
        }
    })
})