import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const email = document.querySelector("input")
const text = document.querySelector("textarea")
const button = document.querySelector("button")
let obj = {}
const parsedObj = JSON.parse(localStorage.getItem("feedback-form-state"))

form.addEventListener("input", throttle(savingData, 500))

function savingData(event) {
   event.target.type === "email" ? obj.email = event.target.value : false;
   event.target.name === "message" ? obj.text = event.target.value : false;
   localStorage.setItem("feedback-form-state", JSON.stringify(obj))
}

if(localStorage.getItem("feedback-form-state")) {
   email.value = parsedObj.email
   text.value = parsedObj.text
}

button.addEventListener("click", (event) => {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
    event.preventDefault()
    localStorage.removeItem("feedback-form-state")
    email.value = ""
    text.value = "" 
})
