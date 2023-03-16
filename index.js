const errorMsg = document.getElementById("error-msg")
const inputEl = document.getElementById("email")
const btn = document.getElementById("btn")
const iconError = document.getElementById("icon-error")
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener('click', function(e){
    e.preventDefault()
    if (inputEl.value === ""){
        errorMsg.textContent = "Please fill out this field"
    } else if (inputEl.value.match(validRegex)){
        errorMsg.textContent = "Thank you for subscribing to our newsletter!"
        errorMsg.style.color = "lightgreen"
        inputEl.value = ""
        iconError.style.display="none"
    } else {
        errorMsg.textContent = "Please enter a valid email address"
        errorMsg.style.color = "red"
        iconError.style.display = "block"
    }
})

