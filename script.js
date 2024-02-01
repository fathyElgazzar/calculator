"use strict";

// basic functions
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  if (secondNum === 0) return (calcResult.innerText = "OOPS");
  return firstNum / secondNum;
}

let displayValue = [];
let operator, firstNum, secondNum, index, result;

function operate(operator, firstNum, secondNum) {
  switch (operator) {
    case "plus":
      return add(firstNum, secondNum);
    case "minus":
      return subtract(firstNum, secondNum);
    case "time":
      return multiply(firstNum, secondNum);
    case "frac":
      return divide(firstNum, secondNum);
    default:
      return "Invalid operator";
  }
}

function evaluate() {
  if (!operator) return (calcResult.innerText = "Input a valid operator!");
  if (!firstNum) {
    firstNum = Number(displayValue.slice(0, index).join(""));
  }
  secondNum = Number(displayValue.slice(index + 1).join(""));
  result = operate(operator, firstNum, secondNum);
  if (result % 1 === 0) {
    calcResult.innerText = result;
  } else calcResult.innerText = result.toFixed(2);
  return (firstNum = result);
}

function clearResult() {
  displayValue = [];
  firstNum = 0;
  calcResult.innerText = "0";
  operator = undefined;
}

// Elements
const calcResult = document.getElementById("calc-result");
const digits = document.querySelectorAll(".digit");
const signs = document.querySelectorAll(".sign");
const clearBtn = document.getElementById("btn-clear");
const equalBtn = document.getElementById("equal");

// Event listeners
// get the sign value and store it into `operator`
signs.forEach((sign) =>
  sign.addEventListener("click", function (e) {
    let signValue = e.target.innerText;
    displayValue.push(signValue);
    index = displayValue.findIndex((value) => value === signValue);
    // firstNum = calcResult.innerText;

    operator = e.target.id;
  })
);

// Select number value
// display the digits on the screen
digits.forEach((btn) => {
  btn.addEventListener("click", () => {
    let numValue = Number(btn.innerText);
    // console.log(numValue);
    if (isNaN(numValue)) numValue = ".";
    if ((numValue <= 9 && numValue >= 0) || numValue === ".") {
      // I really tried hard to remember this solution
      displayValue.push(numValue);

      // calcResult.innerText = displayValue
      //   .filter((item) => typeof item === "number" || item === ".")
      //   .join("");
      calcResult.innerText = displayValue.join("");
    }
  });
});

// Eval the expression and clear the values
equalBtn.addEventListener("click", (e) => {
  evaluate();
  displayValue = [];
});

clearBtn.addEventListener("click", clearResult);
