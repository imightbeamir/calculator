const display = document.querySelector(".display");
let firstNumber = null;
let op = null;

function NUMclicked(e) {
  display.value += e;
}

function OPclicked(e) {
  if (e === "c") display.value = "";
  if (e === "del") {
    let value = display.value;
    display.value = value.substr(0, value.length - 1);
  } else {
    op = e;
    firstNumber = display.value;
    display.value = "";
  }
}

function EQUALclicked() {
  let first = Number(firstNumber);
  let secound = Number(display.value);
  let result = null;
  switch (op) {
    case "+":
      result = first + secound;
      display.value = result;
      break;
    case "-":
      result = first - secound;
      display.value = result;
      break;
    case "*":
      result = first * secound;
      display.value = result;
      break;
    case "/":
      result = first / secound;
      display.value = result;
      break;
  }
}
