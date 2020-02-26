//document.querySelector(".calculator__output").value = "13";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInputs = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__clear");

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}
const numberOne = Number(calculatorInputs[6].innerText);
const numberTwo = Number(calculatorInputs[5].innerText);

function handleClick() {
  calculatorOutput.value = subtract(numberOne, numberTwo);
  console.log("clicked");
}
calculatorResult.addEventListener("click", handleClick);

function handleClear() {
  calculatorOutput.value = "";
  console.log("cleared");
}
calculatorClear.addEventListener("click", handleClear);

/*function handleInputClick() {
  console.log("Handle input click");
}
calculatorInputs[0].addEventListener("click", handleInputClick);
calculatorInputs[1].addEventListener("click", handleInputClick);

handleInputClick.forEach(addInputEventListener);*/

function addInputEventListener(calculatorInput) {
  function handleCalculatorInputClick() {
    calculatorOutput.value = calculatorInput.innerText;
  }
  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}
calculatorInputs.forEach(addInputEventListener);
