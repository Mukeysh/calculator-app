const calculatorKeys = document.querySelectorAll(".calculator__keys button");
const calculator = document.querySelector(".calculator");
const result = document.querySelector(".calculator__result");

calculatorKeys.forEach((btns) => {
  btns.addEventListener("click", calculation);
});

function calculation(e) {
  const key = event.target;
  const keyValue = key.textContent;
  const resultValue = result.textContent;
  const type = key.dataset.type;
  const previousKeys = calculator.dataset.previousKeys;

  if (type === "number") {
    if (resultValue === "0" || previousKeys === "operator") {
      result.textContent = keyValue;
    } else {
      result.textContent = resultValue + keyValue;
    }
  }
  if (type === "operator") {
    const operatorKeys = calculator.querySelectorAll('[data-type="operator"]');
    operatorKeys.forEach((el) => {
      el.dataset.state = "";
    });
    key.dataset.state = "selected";
    calculator.dataset.firstNumber = resultValue;
    calculator.dataset.operator = key.dataset.key;
  }
  if (type === "equal") {
    const firstNumber = calculator.dataset.firstNumber;
    const operator = calculator.dataset.operator;
    const secondNumber = resultValue;
    result.textContent = calculate(firstNumber, operator, secondNumber);
  }

  if (type === "reset" || type === "del") {
    result.textContent = "0";
    delete key.dataset.state;
    delete calculator.dataset.firstNumber;
    delete calculator.dataset.operator;
  }
  calculator.dataset.previousKeys = type;
}

function calculate(firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  if (operator === "plus") return firstNumber + secondNumber;
  if (operator === "minus") return firstNumber - secondNumber;
  if (operator === "times") return firstNumber * secondNumber;
  if (operator === "divide") return firstNumber / secondNumber;
}
