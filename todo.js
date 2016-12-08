//creates variable info and saves DOM Elements to each
var firstTextBox = document.getElementById("firstTextBox");
var cssStyles = document.getElementById("cssStyles");
var enter = document.getElementById("enter");
var thingsToDo = document.getElementById("thingsToDo");

//this makes the button listen for when it's clicked, and when it is, the item is added to the list
enter.addEventListener("click", function(){
thingsToDo.innerHTML += "<div style ='color:" + cssStyles.value + "'>"+firstTextBox.value + "</div>";
});

//this listens for when the items are clicked on, and when they are, they are striked through
 thingsToDo.addEventListener("click", function(evt){
          evt.target.style.textDecoration = "line-through";
      });
      
//gets rid of items when they are clicked. It's listening for a double click, which makes the item disappear.
thingsToDo.addEventListener("dblclick", function(evt){
    var remove = evt.target;
    remove.parentNode.removeChild(remove);
});

//this 
cssStyles.addEventListener("change", differentStyles);
function differentStyles() {
    var red = cssStyles.value;
    var blue = cssStyles.value;
    var green = cssStyles.value;
    var purple = cssStyles.value;


//this is the dropdown option red, which makes the text red when it's in the to do list
    if (cssStyles.value === "red"){
        thingsToDo.style.color = "red";
        var colorStyleRed = red.style.color;
        thingsToDo.innerHTML = colorStyleRed;
    }
//this is the dropdown option blue, which makes the text blue when it's in the to do list
    else if (cssStyles.value === "blue"){
        thingsToDo.style.color = "blue";
        var colorStyleBlue = blue.style.color;
        thingsToDo.innerHTML = colorStyleBlue;
    }
//this is the dropdown option green, which makes the text green when it's in the to do list
    else if (cssStyles.value === "green"){
        thingsToDo.style.color = "green";
        var colorStyleGreen = green.style.color;
        thingsToDo.innerHTML = colorStyleGreen;
    }
//this is the dropdown option purple, which makes the text purple when it's in the to do list
     else if (cssStyles.value === "purple"){
        thingsToDo.style.color = "purple";
        var colorStylePurple = purple.style.color;
        thingsToDo.innerHTML = colorStylePurple;
    }
     

}
