//creates variable info and saves DOM Elements to each
var firstTextBox = document.getElementById("firstTextBox");
var operations = document.getElementById("operations");
var secondTextBox = document.getElementById("secondTextBox");
var equals = document.getElementById("equals");
var answer = document.getElementById("answer");

//this makes the button listen for when it's clicked
equals.addEventListener("click", mathCalculator);


function mathCalculator() {
    var num1 = firstTextBox.value;
    var num2 = secondTextBox.value;
    var opp = operations.value;

    if (operations.value === "+") {
    var plus = parseInt (num1);
    var plus2 = parseInt (num2);
       var plustotal = plus + plus2;
       answer.innerHTML = plustotal;
    }

    else if (operations.value === "-") {
    var minus = parseInt (num1);
    var minus2 = parseInt (num2);
       var minustotal = minus - minus2;
       answer.innerHTML = minustotal;
    }

    else if (operations.value === "*") {
    var times = parseInt (num1);
    var times2 = parseInt (num2);
    var timestotal = times * times2
    answer.innerHTML = timestotal;
    }

    else if (operations.value === "/") {
    var divide = parseInt (num1);
    var divide2 = parseInt (num2);
    var dividetotal = divide / divide2;
    answer.innerHTML = dividetotal;
    }

    else if (operations.value === "^") {
    var exponent = parseInt (num1);
    var exponent2 = parseInt (num2);
    answer.innerHTML = Math.pow(exponent, exponent2);
    }

    else if (operations.value === "%") {
    var mod = parseInt (num1);
    var mod2 = parseInt (num2);
    answer.innerHTML = mod % mod2;
    }
}
