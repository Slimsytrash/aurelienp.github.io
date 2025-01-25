let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/singer.png") {
    myImage.setAttribute("src", "images/cascade.png");
  } else {
    myImage.setAttribute("src", "images/singer.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Veuillez saisir votre nom.");
  localStorage.setItem("nom", myName);
  myHeading.textContent = "Welcome, " + myName;
}

if (!localStorage.getItem("nom")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("nom");
  myHeading.textContent = "Welcome, " + storedName;
}

myButton.addEventListener("click", function () {
  setUserName();
});
