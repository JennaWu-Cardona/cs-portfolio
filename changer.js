//creates variables and saves DOM Elements to each
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

/* EventListener is for button
sets the body's baackground color to the user provided value*/
colorChangeButton.addEventListener("click", function(){
document.body.style.backgroundColor = newBGColor.value;
})