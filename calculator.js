function add(a, b) {
  return (a + b).toFixed(14) * 1e14 / 1e14;
}

function subtract(a, b) {
  return (a - b).toFixed(14) * 1e14 / 1e14;
}

function multiply(a, b) {
  return (a * b).toFixed(14) * 1e14 / 1e14;
}

function divide(a, b) {
  if (b !== 0) {
    return (a / b).toFixed(14) * 1e14 / 1e14;
  } else {
    return "Error";
  }
}

function operate(operator, a, b) {
  switch (operator) {
    case "add": return add(parseFloat(a), parseFloat(b)); break;
    case "subtract": return subtract(parseFloat(a), parseFloat(b)); break;
    case "divide": return divide(parseFloat(a), parseFloat(b)); break;
    case "multiply": return multiply(parseFloat(a), parseFloat(b)); break;
  }
}

function clear() {
  display.innerHTML = "";
  expression.innerHTML = "";
  prevValue = "";
  currentValue = "";
  operator = "";
  result = 0;
}

function disableDecimal() {
  decimalBtn.value = "";
}

function enableDecimal() {
  decimalBtn.value = ".";
}

let display = document.querySelector(".display");
let expression = document.querySelector(".expression");
let numButtons = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector("#equal");
let buttons = document.querySelectorAll(".button");
let clearBtn = document.querySelector("#clear");
let decimalBtn = document.querySelector("#decimal");
let currentValue = "";
let prevValue = "";
let result;
let operator;

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function(event) {
      expression.innerHTML = expression.innerHTML + button.innerHTML;
  })
}

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
  if (prevValue && currentValue && operator) {
    result = operate(operator, prevValue, currentValue);
    currentValue = result;
    display.innerHTML = result;
  }
})

clearBtn.addEventListener("click", clear);
