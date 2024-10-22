//check if localStorage exists for this
let inputField = document.getElementById("inputField");
let nameButton = document.getElementById("nameButton");
let nameText = document.getElementById("nameText");

if (localStorage.getItem("userName")) {
    inputField.value = localStorage.getItem("userName");
} else {
    inputField.value = "Enter name";
}

inputField.addEventListener("click", () => {
    inputField.value = "";
})

nameButton.addEventListener("click", () => {
    localStorage.setItem("userName", inputField.value);
})

nameText.append(localStorage.getItem("userName"));
//eventListener on nameButton will set value of inputField to localStorage