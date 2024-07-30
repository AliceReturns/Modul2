console.clear();

let countDoWhile: number = 0;
const counterTS = document.getElementById("counter");

do {
  console.log("This is number " + countDoWhile);
  if (counterTS) {
    counterTS.innerHTML += `This is number ${countDoWhile}<br>`;
  }
  countDoWhile += 2;
} while (countDoWhile <= 20);
