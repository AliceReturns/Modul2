//! ** Math Methoden

console.log("Hallo");

const piZahl: number = Math.PI;
console.log(piZahl);

// ** Math .round()  --> rundet eine Zahl auf

console.log(Math.round(3.4));
console.log(Math.round(3.5));
console.log(Math.round(3.542982));

// ** Math.floor() --> rundet die erste Zahl vor der Komma Stelle ab

console.log(Math.floor(3.999));
console.log(Math.floor(3.0));

// ** Math.seil() --> rundet die letzte Zahl auf

console.log("Math.ceil()");
console.log(Math.ceil(3.00000001));

// ** Math.random() --> generiert eine zufällige Zahl zwischen 0 und 0.9

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// ** Zufallszahl zwischen 0 und 10

console.log(Math.random() * 10);
console.log(Math.random() * 10);
console.log(Math.random() * 10);

const randomZahlZwischen1_9: number = Math.floor(Math.random() * 10);
console.log(randomZahlZwischen1_9);

console.clear();

// ** Random zahlen mit if und else

const RandomErrorNumber: number = Math.ceil(Math.random() * 10);

if (RandomErrorNumber == 1) {
  console.log("Schwerer Fehler");
} else if (RandomErrorNumber == 2) {
  console.log("Mittlerer Fehler");
} else if (RandomErrorNumber == 3) {
  console.log("Schwerer Fehler");
} else {
  console.log("Alles Top");
}

//** switch = if / else nur als andere Schreibweise

// console.log("Überprüfung mit Switch");

// switch (RandomErrorNumber) {
//   case 1:
//     console.log("Schwerer Fehler");
//     break;
//   case 2:
//     console.log("Mittlerer Fehler");
//     break;
//   case 3:
//     console.log("leichter Fehler");
//     break;
//   default:
//     console.log("Alles Top");
//     break;
// }

// const FruitVeggie = window.prompt("Gib mir ein Obst oder ein Gemüse");

// if (
//   FruitVeggie == "Banane" ||
//   FruitVeggie == "Apfel" ||
//   FruitVeggie == "Birne"
// ) {
//   console.log("Das ist ein Obst");
// } else if (
//   FruitVeggie == "Blumenkohl" ||
//   FruitVeggie == "Karotte" ||
//   FruitVeggie == "Sellerie"
// ) {
//   console.log("Das ist eine Gemüse");
// } else {
//   console.log("Keine Ahnung");
// }

// switch (FruitVeggie) {
//   case "Banane":
//   case "Apfel":
//   case "Birne":
//     console.log("Das ist ein Obst durch switch condition");
//     break;
//   case "Blumenkohl":
//   case "Karotte":
//   case "Sellerie":
//     console.log("Das ist ein Gemüse");
//     break;
//   default:
//     console.log("Keine Ahnung Brudii");
//     break;
// }
function RandomBgColor() {
  console.log("Ich wurde geklickt");
  let randomZahl: number = Math.round(Math.random() * 10);
  console.log(randomZahl);
  switch (randomZahl) {
    case 1:
      document.body.style.backgroundColor = "red";
      break;
    case 2:
      document.body.style.backgroundColor = "blue";
      break;
    case 3:
      document.body.style.backgroundColor = "pink";
      break;
    default:
      console.log("außer Betrieb");
      break;
  }
}

//** Mit switch kann man abgesehen von Werten auch Ausdrücke prüfen
//** Sowie auch bolean Werte (true/false)

switch (true) {
  case RandomErrorNumber < 5:
    console.log("Switch mit true = Kein Fehler");
    break;
  case RandomErrorNumber < 8:
    console.log("Switch mit true = Warnung");
    break;
  default:
    console.log("Switch mit true = Alles top");
    break;
}

//** ternary Operator
//** Ausdruck (Bedingung) ? Ausführung wenn etwas wahr ist : Ausführung wenn etwas falsch ist */

const IstUserOnline: boolean = Math.random() <= 0.5;
console.log({ IstUserOnline });

if (IstUserOnline) {
  console.log("User ist online");
} else {
  console.log("User ist offline");
}

// Abkürzung von if_else

const message: string = IstUserOnline ? "User ist online" : "User ist offline";
console.log(message);

// const randomLottoZahl: string = Matg.ceil(Math.random() * 49);
// const lottoMessage: string =
//   randomLottoZahl < 5 ? "What a small Number" : "Not a small Number";
// console.log(lottoMessage);
