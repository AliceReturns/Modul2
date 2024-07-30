console.log("Hallo Welt :)");

//** Schleifen / Loops --> dienen dazu Code mehrfach zu durchlaufen und eine oder mehrere Anweisungen, werden so lange erfüllt, bis eine bestimmte Bedingung erfüllt ist (oder gegebenenfalls auch nicht mehr erfüllt) */

//** for-Schleife */
//** Aufbau : */
//** -for (start; condition; step){    */ <-- (Start, Bedingung, Step)
//** Code  */
//** } */

//? wir wollen Hello World 5x in clg ausgeben
//? 1. Anfangwert --> wir legen eine Variable index vom Typ number, mit dem STartwert 0 an
//? 2. Bedingung --> wir legen eine Bedingung fest, wann die Schleife abgebrochen werden soll => wenn index nicht mehr kleiner als 5 ist (warum 5 --> weil der Ablauf 5x sein soll)
//? 3. Zähler --> wir zählen für jeden Schleifendurchlauf die Variable index um 1 hoch : z.B. mit --> index ++

//+    Anfangswert        Bedingung    Zähler
//+          ⬇️                ⬇️          ⬇️
for (let index: number = 0; index < 5; index++) {
  console.log("Hello World :)");
}

//$ index / i = best practice
//$ dennoch frei wählbar (Name der Variable)

//! ACHTUNG  !! Infinty Loop  !!

//** wenn eine Bedingung nicht erreicht werden kann erzeugen wir einen so genannten infinty Loop (große Sorgfalt) */
//** Beispiel */
//** wir starten mit index = 6 --> größer gleich 5 --> kann NIE erreicht werden */

//? hier beginnen wir bei 12 und hören auf wenn index nicht mehr kleiner als 24 ist

for (let i: number = 12; i < 24; i++) {
  console.log("aktueller Index:", i);
}

//? wir zählen von 0 bis 20 und zählen in jedem schleifendurchlauf um 2 hoch

//oder i = i +2
for (let i: number = 0; i < 20; i += 2) {
  console.log("plus 2", i);
}

//? same as above => nur mit ungeraden Zahlen --> wir müssen hier bei i = 1 anfangen

for (let i: number = 1; i <= 20; i += 2) {
  console.log("ungerade", 1);
}

//? wir können auch herunterzählen
//? wir fangen bei einer größeren Zahl an (20) & hören auf wenn die 0 erreicht ist
//? zählen runter z.B. mit --> i--

for (let i: number = 20; i >= 0; i--) {
  console.log("Countdown", i);
}

//? alle Zahlen von 0 bis 30 und dir die ausgeben, die durch 3 teilbar sind

for (let i: number = 0; i <= 30; i++) {
  if (i % 3 === 0) console.log(i, "ist durch 3 teilbar");
}

//? wir wollen von 1 bis 10 arbeiten
//? wir merken uns das Ergebnis in einer vorher von uns deklarierten Variable --> sumOfNums

let sumOfNums: number = 0;
for (let i: number = 1; i <= 10; i++) {
  console.log(`${sumOfNums} plus ${i}= ⬇️`);
  sumOfNums += i;

  //sumOfNums = sumOfNums + i

  if (i === 10) {
    console.log(
      "Wir sind am Ende unseres Loops angekommen und haben die Gesamtesumme",
      sumOfNums
    );
  } else {
    console.log(sumOfNums);
  }
}

//? wir können auch bei Strings Buchstabe für Buchstabe durchlaufen
//? wir wollen jeden Buchstabe verdoppeln

let meinText: string = "Das ist mein Text";
let doubledText: string = "";

console.log("mein Text hat eine Länge von", meinText.length);

for (let i: number = 0; i < meinText.length; i++) {
  doubledText += meinText[i] + meinText[i];
}

console.log(doubledText);

//? natürlich können wir auch ein Array durchlaufen

const numberstoEleven: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// jedes einzelne Element aus dem array in der Konsole ausgeben lassen

for (let i: number = 0; i < numberstoEleven.length; i++) {
  console.log(numberstoEleven[i]);
}

//? Array mit for Loop selbst befüllen

const numberstoTwelve: number[] = [];

// wir gehen die zahlen von 1 bis 12 durch

for (let i: number = 1; i <= 12; i++) {
  numberstoTwelve.push(i);
}

console.log(numberstoTwelve);

//** While Schleife */
//** bei der While Schleife müssen wir den Zähler selbst anlegen und in der Schleife hochzählen */

let counterForWhile: number = 0;

// wenn --> let counterForWhile: number = 10;
//--> while loop wird gar nicht erst ausgeführt

while (counterForWhile < 10) {
  console.log("Hello World from while");

  //? WICHTIG Zähler selbst hochzählen
  counterForWhile++;
  console.log(counterForWhile);
}

//? mit while kann man auch auf einen User input reagieren
//? Zähler / Bedingung kann auch ein String sein
let userInput: string | null = "";

while (userInput !== "STOP") {
  userInput = window.prompt("Bitte gib einen Text ein");
}

//** Do-While Schleife */
// --> der Unterschied zwischen while und do-while ist, dass bei do-while der Code mindestens 1x ausgeführt wird (bevor die Bedingung geprüft wird)

let specialCounter: number = 5;

//? kopfgesteuerte Schleife
while (specialCounter < 5) {
  console.log("hello from WHILE");
  specialCounter++;
}

//? fussgesteuerte Schleife
do {
  console.log("hello from DO-WHILE");
} while (specialCounter < 5);

//? DO-WHILE mit Zähler

let doWhileCounter: number = 0;
do {
  console.log(doWhileCounter);
  doWhileCounter++;
} while (doWhileCounter <= 10);

//** for of Schleife */
//** mit for ... of kann ich einen Array oder String durchlaufen */

//? Beispiel mit jedem Schleifendurchlauf das aktuelle Array Element ausgeben

const meals: string[] = ["Sushi", "Waffles", "Pizza", "Shakes"];

for (const meal of meals) {
  console.log(meal);
}
