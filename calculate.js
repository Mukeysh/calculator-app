const calculatorKeys = document.querySelectorAll(".calculator__keys button");
const calculator = document.querySelector(".calculator");
const result = document.querySelector(".calculator__result");

calculatorKeys.forEach((btns) => {
  btns.addEventListener("click", calculation);
});

function calculation(e) {
  const buttonValue = e.target.value;
  if (result.textContent === "0") {
    result.textContent = buttonValue;
  } else if (buttonValue === "=") {
    result.textContent = eval(result.textContent);
  } else if (buttonValue === "del" || buttonValue === "reset") {
    result.textContent = 0;
  } else {
    result.textContent += buttonValue;
  }
}
