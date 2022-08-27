const display = document.querySelector(".display");

let displayValue = "";
let isFirstValue = true;
let firstValue = "";
let secondValue = "";
let operationSign = "";

function modifyValue(value) {
  if (isFirstValue) {
    firstValue += value;
  } else {
    secondValue += value;
  }
  updateDisplay();
}

function updateDisplay() {
  if (isFirstValue) {
    display.textContent = firstValue;
  } else {
    display.textContent = secondValue;
  }
}

function removeLast() {
  if (isFirstValue) {
    firstValue = firstValue.slice(0, -1);
  } else {
    secondValue = secondValue.slice(0, -1);
    resetValues();
  }
  updateDisplay();
}

function resetValues() {
  displayValue = "";
  isFirstValue = true;
  firstValue = "";
  secondValue = "";
  operationSign = "";
  updateDisplay();
}

function performOperation() {
  switch (operationSign) {
    case "+":
      displayValue = +firstValue + +secondValue;
      break;

    case "-":
      displayValue = +firstValue - +secondValue;
      break;

    case "*":
      displayValue = +firstValue * +secondValue;
      break;

    case "/":
      displayValue = +firstValue / +secondValue;
      break;

    default:
      displayValue = +firstValue;
      break;
  }
  console.log("equal pressed");
  console.log("1st: ", firstValue);
  console.log("2nd: ", secondValue);
  display.textContent = displayValue;
}

document.getElementById("1").addEventListener("click", () => modifyValue("1"));
document.getElementById("2").addEventListener("click", () => modifyValue("2"));
document.getElementById("3").addEventListener("click", () => modifyValue("3"));
document.getElementById("4").addEventListener("click", () => modifyValue("4"));
document.getElementById("5").addEventListener("click", () => modifyValue("5"));
document.getElementById("6").addEventListener("click", () => modifyValue("6"));
document.getElementById("7").addEventListener("click", () => modifyValue("7"));
document.getElementById("8").addEventListener("click", () => modifyValue("8"));
document.getElementById("9").addEventListener("click", () => modifyValue("9"));

document.getElementById("mult").addEventListener("click", () => {
  operationSign = "*";
  isFirstValue = false;
});
document.getElementById("div").addEventListener("click", () => {
  operationSign = "/";
  isFirstValue = false;
});
document.getElementById("less").addEventListener("click", () => {
  operationSign = "-";
  isFirstValue = false;
});
document.getElementById("plus").addEventListener("click", () => {
  operationSign = "+";
  isFirstValue = false;
});

document.getElementById("result").addEventListener("click", performOperation);
document.getElementById("erase").addEventListener("click", removeLast);
document.getElementById("clear").addEventListener("click", resetValues);
