"use strict";
const calcResult = document.getElementById("calc-result");
const digits = document.querySelectorAll(".digit");
const signs = document.querySelectorAll(".sign");
const clearBtn = document.getElementById("btn-clear");
const equalBtn = document.getElementById("equal");
let operator, firstNum, secondNum, result;

// basic functions
const add = function (firstNum, secondNum) {
  return firstNum + secondNum;
};

const subtract = function (firstNum, secondNum) {
  return firstNum - secondNum;
};

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  return secondNum === 0 ? "Infiniy" : firstNum / secondNum;
}

function operate(operator, firstNum, secondNum) {
  if (!operator) return (calcResult.innerText = "Input a valid operator!");
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
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

function clearResult() {
  firstNum = undefined;
  secondNum = undefined;
  calcResult.innerText = "0";
  operator = undefined;
}

function limitResult() {
  if (result % 1 === 0) {
    calcResult.textContent = result;
  } else {
    calcResult.textContent = result.toFixed(2);
  }
}

function decimalPoint() {
  if (
    !calcResult.textContent.includes(".") &&
    !calcResult.textContent.includes("Infinity")
  ) {
    calcResult.textContent = calcResult.textContent.concat(".");
  }
}

// Event listeners
signs.forEach((sign) =>
  sign.addEventListener("click", function (e) {
    if (firstNum === undefined || firstNum === "") {
      operator = e.target.id;
      firstNum = calcResult.textContent;
      calcResult.textContent = "0";
    } else if (secondNum === undefined || secondNum === "") {
      secondNum = calcResult.textContent;
      result = operate(operator, firstNum, secondNum);
      calcResult.textContent = result;
      firstNum = calcResult.textContent;
      secondNum = "";
      operator = e.target.id;
      limitResult();
    } else {
      calcResult.textContent = "0";
    }
  })
);

// Select number value
// display the digits on the screen
digits.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log("result", result);

    if (
      calcResult.textContent === "Infinity" ||
      calcResult.textContent == result ||
      calcResult.textContent === "-Infinity" ||
      calcResult.textContent === "0"
    ) {
      result = "";
      calcResult.textContent = btn.innerText;
    } else {
      calcResult.textContent += btn.innerText;
    }
  });
});

// Eval the expression and clear the values
equalBtn.addEventListener("click", (e) => {
  if (result == "" || firstNum !== undefined || firstNum !== "") {
    secondNum = calcResult.textContent;
    result = operate(operator, firstNum, secondNum);
    calcResult.textContent = result;
    firstNum = "";
    secondNum = "";
    limitResult();
  }
});

clearBtn.addEventListener("click", clearResult);
