"use strict";
// basic functions
function add(firstNum, secondNum) {
  return firstNum + secondNum;
}
function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}
function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}
function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

let displayValue = [];
let operator = `+`;

function operate(firstNum, secondNum) {
  return multiply(firstNum, secondNum);
}

const calcResult = document.getElementById("calc-result");
const btn = document.querySelectorAll(".btn");
// Select number value
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let numValue = Number(btn.innerText);
    if (isNaN(numValue)) return;
    if (numValue <= 9 && numValue >= 0) {
      // I really tried hard to remember this solution
      displayValue.push(numValue);
      calcResult.innerText = displayValue.join("");
    }
  });
});
