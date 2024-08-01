//** FN deklarieren + Parameter (number[])*/
//** Durchschnitt berechnen */
//** Summe aller Punkte ausrechnen => Loop (ganzes Array durchlaufen) */
//** berechnen => Summe durch Anzahl der Zahlen */
//** Bewertung ausgeben => if/else  */

const results = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46];

function calAverage(myResults: number[]): string {
  //**Platzhalter mit Typ*/
  //? Summe aller Punkte
  let sum: number = 0;
  for (
    let i: number = 0;
    i < myResults.length;
    i++ //** myResults = Array   length = geht alle zahlen im Array durch */
  )
    sum += myResults[i];
  // sum = sum + myResults[i]
}

console.log(sum);

//? Durchschnitt berechnen

const avarage: number = sum / results.length;
console.log(avarage);

//? Bewertung ausgeben

let level: string;

if (avarage < 50) {
  level = "ungenügend";
} else if (avarage < 60) {
  level = "mangelhaft";
} else if (avarage < 70) {
  level = "ausreichend";
} else if (avarage < 80) {
  level = "befriedigend";
} else if (avarage < 90) {
  level = "gut";
} else {
  level = "sehr gut";

  return level;
}
