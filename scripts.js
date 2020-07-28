//GLOBAL VARIABLES
let buttonNumber;
let currentNumber = 0;
let lastNumber = 0;
let display;
let operator = undefined;
let result;
let finalNumber = 0;
let first = true;
const maxChars = 10;
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
        removeChildNodes(screen);
        screen.appendChild("Dividing by 0 is bad >:(");
    }
    return x / y;
}
function operate (operator, x, y) {
    if (first == true) {
        first = false;
        return y;
    }
    operator === "+" ?  result = add(x, y)
    : operator === "-" ? result = subtract(x, y)
    : operator === "*" ? result = multiply (x, y)
    : operator === "/" ? result = divide (x, y)
    : removeChildNodes(screen) & screen.appendChild("Uh oh! :(");
    return result;
}


//OTHER KEY FUNCTIONS
function removeChildNodes (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function createNumber (buttonNumber) {
    if(currentNumber.toString().length > maxChars) {
        return currentNumber;
    }
    return Number(currentNumber.toString() + buttonNumber.toString());
}
function displayNumber (currentNumber) {
    display = document.createTextNode(currentNumber);
    removeChildNodes(screen);
    screen.appendChild(display);
}
function cleanUp() {
    lastNumber = finalNumber;
    currentNumber = 0;
    document.getElementById(".").disabled = false;
}


//BUTTON EVENT LISTENERS
document.getElementById("0").addEventListener("click", function(){
    buttonNumber = "0";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
});
document.getElementById("1").addEventListener("click", function(){
    buttonNumber = "1";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
});
document.getElementById("2").addEventListener("click", function(){
    buttonNumber = "2";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
});
document.getElementById("3").addEventListener("click", function(){
    buttonNumber = "3";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
});
document.getElementById("4").addEventListener("click", function(){
    buttonNumber = "4";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
});
document.getElementById("5").addEventListener("click", function(){
    buttonNumber = "5";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
});
document.getElementById("6").addEventListener("click", function(){
    buttonNumber = "6";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
});
document.getElementById("7").addEventListener("click", function(){
    buttonNumber = "7";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
});
document.getElementById("8").addEventListener("click", function(){
    buttonNumber = "8";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
});
document.getElementById("9").addEventListener("click", function(){
    buttonNumber = "9";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
});
document.getElementById(".").addEventListener("click", function(){
    currentNumber = currentNumber + ".";
    displayNumber(currentNumber);
    document.getElementById(".").disabled = true;
})
document.getElementById("+").addEventListener("click", function(){
    finalNumber = operate(operator, lastNumber, currentNumber);
    operator = "+";
    displayNumber(finalNumber);
    cleanUp();
});
document.getElementById("-").addEventListener("click", function(){
    finalNumber = operate(operator, lastNumber, currentNumber);
    operator = "-";
    displayNumber(finalNumber);
    cleanUp();
});
document.getElementById("*").addEventListener("click", function(){
    finalNumber = operate(operator, lastNumber, currentNumber);
    operator = "*";
    displayNumber(finalNumber);
    cleanUp();
});
document.getElementById("/").addEventListener("click", function(){
    finalNumber = operate(operator, lastNumber, currentNumber);
    operator = "/";
    displayNumber(finalNumber);
    cleanUp();
});
document.getElementById("=").addEventListener("click", function(){
    finalNumber = operate(operator, lastNumber, currentNumber);
    displayNumber(finalNumber);
    cleanUp();
});
document.getElementById("C").addEventListener("click", function(){
    removeChildNodes(screen);
    currentNumber = 0;
    lastNumber = 0;
    finalNumber = 0;
    operator = undefined;
    document.getElementById(".").disabled = false;
    first = true;
})
document.getElementById("back").addEventListener("click", function(){
    let array = [];
    let buildingNumber = currentNumber.toString();
    for (i = 0; i < buildingNumber.length; i++) {
        array.push(buildingNumber.charAt(i));
    }
    if (array[array.length - 1] = ".") {
        document.getElementById(".").disabled = false;
    }
    array.pop();
    currentNumber = Number(array.join(""))
    displayNumber(currentNumber);
})

//To do: make division work, solve subtraction decimal issue