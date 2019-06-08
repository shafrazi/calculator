function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "add": return add(parseFloat(a), parseFloat(b)); break;
    case "subtract": return subtract(parseFloat(a), parseFloat(b)); break;
    case "divide": return divide(parseFloat(a), parseFloat(b)); break;
    case "multiply": return multiply(parseFloat(a), parseFloat(b)); break;
  }
}


let display = document.querySelector(".display");
let numButtons = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector("#equal");
let currentValue = "";
let prevValue = "";
let result;
let operator;

for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", function(event) {
    currentValue = currentValue + numButtons[i].value;
    display.innerHTML = currentValue;
  })
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function(event) {
    prevValue = currentValue;
    currentValue = "";
    operator = operators[i].id;
    display.innerHTML = "";
  })
}

equal.addEventListener("click", function(event) {
  result = operate(operator, prevValue, currentValue);
  currentValue = result;
  display.innerHTML = result;
})
