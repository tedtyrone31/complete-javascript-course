// let num1 = 0;
// let num2 = 0;
// let sum = 0;
// let Ave = 0;
// let finalAve = 0;

// for (let i = 1; i < 6; i++) {
//   num1 = prompt("Enter first number:");
//   num2 = prompt("Enter second number:");
//   sum = Number(num1) + Number(num2);
//   console.log(`${i}. ${sum}`);
//   Ave = Ave + sum;
//   finalAve = Ave / 5;
// }

// console.log(finalAve);
// function Average() {}
// let start = prompt("Enter start of sequence");
// let end = prompt("Enter end of sequence");

// document.querySelector(".firstNumber").value = 1;
// document.querySelector(".secondNumber").value = 20;

let start = document.querySelector(".firstNumber");
let end = document.querySelector(".secondNumber");
let btnCheck = document.querySelector(".btnCheck");
let display = document.querySelector(".displayEven");

// console.log(start);
// console.log(end);

// btnCheck.addEventListener("click", checkForEven);

function checkForEven() {
  for (let i = start.value; i <= end.value; i++) {
    if (i % 2 === 0) {
      display.textContent += `${i} is an even Number.`;
      console.log(`${i}`);
    }
  }
}

// function checkForEven() {
//   console.log(document.querySelector(".firstNumber").value);
//   console.log(document.querySelector(".secondNumber").value);
//   console.log(typeof start);
// }
