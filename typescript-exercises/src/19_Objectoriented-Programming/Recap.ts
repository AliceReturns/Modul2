console.clear();

//** Hier sollen die Classes importiert werden */
//** Bei Import sind keine geschweiften Klammern notwendig */

import Bauplan from "./classes/Bauplan";
import Besitzer from "./classes/Besitzer";
import Raeume from "./classes/Räume";

//** OOP => OBJECT ORIENTED PROGRAMMING => keyword : CLASS */
//** Schreibweise: class -- name -- geschweifte Klammern */

//=> wird von Azubis geschrieben

// type Bauplan = {
//   räume: number;
//   farbe: string;
//   tiefGarage: boolean;
// };

// const haus_1 = {
//   räume: 5,
//   farbe: "grün",
//   tiefGarage: true,
// };

// console.log(haus_1);

//** CLASS */

//** LASS UNS AUFABUEN */

//const heute = new Date();

const besitzer_1 = new Besitzer("Hans", "Müller", 123456789);
besitzer_1.printInfo(); //=> Besitzer: Hans Müller, Handy Nummer: 123456789 aufrufen von der Methode printInfo

const haus_1_mit_class = new Bauplan(5, "grün", true, besitzer_1); //=> hier wird die Class Bauplan aufgerufen

console.log(haus_1_mit_class);

console.log(haus_1_mit_class.renovieren("gelb"));
console.log(haus_1_mit_class.renovieren("red"));
console.log(haus_1_mit_class.tiefGaragenCheck(false));
