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
    return x / y;
}
function operate (operator, x, y) {
    operator = "+" ? add(x, y)
    : operator = "-" ? subtract(x, y)
    : operator = "*" ? multiply (x, y)
    : operator = "/" ? divide (x, y)
    : console.log("Uh oh! Something went wrong");
}