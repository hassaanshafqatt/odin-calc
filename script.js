const divide = (num1, num2) => (num1 / num2).toFixed(2);
const sum = (num1, num2) => (num1 + num2).toFixed(1);
const multiply = (num1, num2) => (num1 * num2).toFixed(1);
const subtract = (num1, num2) => (num1 - num2).toFixed(1);

var num1 = null,
  num2 = null,
  operation = null,
  isPeriod = false;

const container = document.querySelector(".button-container");
const display = document.querySelector("#display");
const period = container.querySelector("#period");
const nums = container.querySelectorAll("#num");
const ops = container.querySelectorAll("#op");
const result = container.querySelector("#result");
const clear = container.querySelector("#clear");



// EventListeners

clear.addEventListener("click", () => {
  display.value = "";
  enableNums();
  enableRes();
  enableOps();
});

result.addEventListener("click", () => {
  secondNum();
  console.log(num2);
  console.log(operation);
  operate(operation, num1, num2);
  enableOps();
  disableNums();
  disableRes();
});

nums.forEach((number) => {
  number.addEventListener("click", (e) => {
    const tc = display.value;
    display.value = tc + e.target.textContent;
  });
});

ops.forEach((button) => {
  button.addEventListener("click", (e) => {
    enableRes();
    enableNums();
    getNumbers();
    operation = e.target.textContent;
  });
});

// Fetching numbers
const getNumbers = () => {
  firstNum();
  disableOps();
  console.log(num1);
};

const firstNum = () => {
  num1 = parseFloat(display.value);
  display.value = "";
};

const secondNum = () => {
  num2 = parseFloat(display.value);
};

// MATHS
const operate = (operator, num1, num2) => {
    let res = null;
    switch (operator) {
      case "*":
        num1 = res = multiply(num1, num2);
        break;
  
      case "/":
        num1 = res = divide(num1, num2);
        break;
      case "+":
        num1 = res = sum(num1, num2);
        break;
      case "-":
        num1 = res = subtract(num1, num2);
        break;
    }
    if (res != null) display.value = res;
  };
