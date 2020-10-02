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
    let divisionResult = x / y;
    if (divisionResult == Infinity) {
        return "NO >:("
    }
    else {
        return divisionResult;
    } 
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


//INPUT FUNCTIONS
function zeroPress () {
    buttonNumber = "0";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
}
function onePress () {
    buttonNumber = "1";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
}
function twoPress () {
    buttonNumber = "2";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
}
function threePress () {
    buttonNumber = "3";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
}
function fourPress () {
    buttonNumber = "4";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
}
function fivePress () {
    buttonNumber = "5";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
}
function sixPress () {
    buttonNumber = "6";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
}
function sevenPress () {
    buttonNumber = "7";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
}
function eightPress () {
    buttonNumber = "8";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
}
function ninePress () {
    buttonNumber = "9";
    currentNumber = createNumber(buttonNumber);
    displayNumber(currentNumber);
}
function dotPress () {
    currentNumber = currentNumber + ".";
    displayNumber(currentNumber);
    document.getElementById(".").disabled = true;
}
function plusPress () {
    if (currentNumber == undefined) {
        operator = "+"
        cleanUp();
    } else {
        finalNumber = operate(operator, lastNumber, currentNumber);
        operator = "+";
        displayNumber(finalNumber);
        cleanUp();
    }
}
function minusPress () {
    if (currentNumber == undefined) {
        operator = "-"
        cleanUp();
    } else {
        finalNumber = operate(operator, lastNumber, currentNumber);
        operator = "-";
        displayNumber(finalNumber);
        cleanUp();
    }
}
function timesPress () {
    if (currentNumber == undefined) {
        operator = "*"
        cleanUp();
    } else {
        finalNumber = operate(operator, lastNumber, currentNumber);
        operator = "*";
        displayNumber(finalNumber);
        cleanUp();
    }
}
function dividePress () {
    if (currentNumber == undefined) {
        operator = "/"
        cleanUp();
    } else {
        finalNumber = operate(operator, lastNumber, currentNumber);
        operator = "/";
        displayNumber(finalNumber);
        cleanUp();
    }
}
function equalsPress () {
    finalNumber = operate(operator, lastNumber, currentNumber);
    displayNumber(finalNumber);
    cleanUp();
    currentNumber = undefined;
}
function clearPress () {
    removeChildNodes(screen);
    currentNumber = 0;
    lastNumber = 0;
    finalNumber = 0;
    operator = undefined;
    document.getElementById(".").disabled = false;
    first = true;
}
function backPress () {
    let array = [];
    let buildingNumber = currentNumber.toString();
    for (let i = 0; i < buildingNumber.length; i++) {
        array.push(buildingNumber.charAt(i));
    }
    if (array[array.length - 1] == ".") {
        document.getElementById(".").disabled = false;
    }
    array.pop();
    currentNumber = Number(array.join(""))
    displayNumber(currentNumber);
}


//BUTTON EVENT LISTENERS
document.getElementById("0").addEventListener("click", function(){
    zeroPress();
});
document.getElementById("1").addEventListener("click", function(){
    onePress();
});
document.getElementById("2").addEventListener("click", function(){
    twoPress();
});
document.getElementById("3").addEventListener("click", function(){
    threePress();
});
document.getElementById("4").addEventListener("click", function(){
    fourPress();
});
document.getElementById("5").addEventListener("click", function(){
    fivePress();
});
document.getElementById("6").addEventListener("click", function(){
    sixPress();
});
document.getElementById("7").addEventListener("click", function(){
    sevenPress();
});
document.getElementById("8").addEventListener("click", function(){
    eightPress();
});
document.getElementById("9").addEventListener("click", function(){
    ninePress();
});
document.getElementById(".").addEventListener("click", function(){
    dotPress();
})
document.getElementById("+").addEventListener("click", function(){
    plusPress();
});
document.getElementById("-").addEventListener("click", function(){
    minusPress();
});
document.getElementById("*").addEventListener("click", function(){
    timesPress();
});
document.getElementById("/").addEventListener("click", function(){
    dividePress();
});
document.getElementById("=").addEventListener("click", function(){
    equalsPress();
});
document.getElementById("C").addEventListener("click", function(){
    clearPress();
})
document.getElementById("back").addEventListener("click", function(){
    backPress();
})


//KEYBOARD SUPPORT
document.onkeydown = function(e) {
    if (e.which == 8) {
        backPress();
    }
    let keyPressed = String.fromCharCode(e.which);
    keyPressed === "0" ? zeroPress()
    : keyPressed === "1" ? onePress()
    : keyPressed === "2" ? twoPress()
    : keyPressed === "3" ? threePress()
    : keyPressed === "4" ? fourPress()
    : keyPressed === "5" ? fivePress()
    : keyPressed === "6" ? sixPress()
    : keyPressed === "7" ? sevenPress()
    : keyPressed === "8" ? eightPress()
    : keyPressed === "9" ? ninePress()
    : keyPressed === "." ? dotPress()
    : keyPressed === "+" ? plusPress()
    : keyPressed === "-" ? minusPress()
    : keyPressed === "*" ? timesPress()
    : keyPressed === "/" ? dividePress()
    : keyPressed === "=" ? equalsPress()
    : keyPressed === "c" ? clearPress()
    : keyPressed = undefined;
}

//to do: fix decimal