//GLOBAL VARIABLES
let enteredNumber;
let storedNumber;
let operator;
let result;
//MATHEMATICAL FUNCTIONS
function add (x, y){
    return x + y;
}
function subtract (x, y){
    return x - y;
}
function multiply (x, y){
    return x * y; 
}
function divide (x, y){
    if (y = 0) {
        document.getElementById("screen").innerhtml = "Dividing by 0 is bad >:(";
    }
    return x / y;
}
function operate (operator, x, y) {
    operator = "+" ?  result = add(x, y)
    : operator = "-" ? result = subtract(x, y)
    : operator = "*" ? result = multiply (x, y)
    : operator = "/" ? result = divide (x, y)
    : console.log("Uh oh! Something went wrong");
    return result;
}
//BUTTON EVENT LISTENERS
document.getElementById("7").addEventListener("click", function(){
    const number = document.createTextNode("7");
    document.getElementById("screen").appendChild(number);
    enteredNumber = document.getElementById.innerhtml;
});
document.getElementById("5").addEventListener("click", function(){
    const number = document.createTextNode("5");
    document.getElementById("screen").appendChild(number);
    enteredNumber = document.getElementById.innerhtml;
});
document.getElementById("+").addEventListener("click", function(){
    operator = "+";
    storedNumber = enteredNumber;
});
document.getElementById("=").addEventListener("click", function(){
    operate(operator, storedNumber, enteredNumber);
    document.getElementById("screen").appendChild(result);
});


// x has to populate, then once an operator is clicked, y has to populate