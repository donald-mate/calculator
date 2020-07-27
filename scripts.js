//GLOBAL VARIABLES
let buttonNumber;
let currentNumber = 0;
let lastNumber = 0;
let display;
let operator;
let result;
let finalNumber = 0;
const screen = document.getElementById("screen");
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
//OTHER KEY FUNCTIONS
function removeChildNodes (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function createNumber (buttonNumber) {
    return Number(currentNumber.toString() + buttonNumber.toString());
}




//BUTTON EVENT LISTENERS
document.getElementById("7").addEventListener("click", function(){
    buttonNumber = "7";
    currentNumber = createNumber(buttonNumber);
    display = document.createTextNode(currentNumber);
    removeChildNodes(screen);
    screen.appendChild(display);
});
document.getElementById("5").addEventListener("click", function(){
    buttonNumber = "5";
    currentNumber = createNumber(buttonNumber);
    display = document.createTextNode(currentNumber);
    removeChildNodes(screen);
    screen.appendChild(display);
});
document.getElementById("+").addEventListener("click", function(){
    removeChildNodes(screen);
    operator = "+";
    finalNumber = operate(operator, lastNumber, currentNumber);
    display = document.createTextNode(finalNumber);
    document.getElementById("screen").appendChild(display);
    lastNumber = finalNumber;
    currentNumber = 0;
});
document.getElementById("=").addEventListener("click", function(){
    removeChildNodes(screen);
    finalNumber = operate(operator, lastNumber, currentNumber);
    display = document.createTextNode(finalNumber);
    document.getElementById("screen").appendChild(display);
    lastNumber = 0;
    currentNumber = finalNumber;
});
document.getElementById("C").addEventListener("click", function(){
    removeChildNodes(screen);
    currentNumber = 0;
    lastNumber = 0;
    finalNumber = 0;
    operator = undefined;
})
document.getElementById(".").addEventListener("click", function(){
    
})
document.getElementById("back").addEventListener("click", function(){
    let array = [];
    let buildingNumber = currentNumber.toString();
    for (i = 0; i < buildingNumber.length; i++) {
        array.push(buildingNumber.charAt(i));
    }
    array.pop();
    currentNumber = Number(array.join(""))
    display = document.createTextNode(currentNumber);
    removeChildNodes(screen);
    document.getElementById("screen").appendChild(display);
})


// to do: decimals, prevent screen flooding, round long decimals to prevent screen flooding