const rateSpiel: number = window.prompt("Rate die Zahl zwischen 1 und 10");

const randomNumberGame: number = Math.round(Math.random() * 10);
console.log(randomNumberGame);

if (randomNumberGame == rateSpiel) {
  console.log("Du hast richtig geraten !");
} else {
  console.log("Das war leider nicht richtig :(");
}
