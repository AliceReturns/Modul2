//import { ka } from "date-fns/locale";

console.log("Hello World :)");

//** Array sind wie Listen und keine einzelnenen Variablen mit einem Wert => Array werden immer mit Eckigen Klammern erstellt */

//** Array mit string */

const shoppingItemList: string[] = [
  "Toilet Paper",
  "Beer",
  "Ice Cream",
  "Peanuts",
  "Coffee",
  "Brokkoli",
];
console.log(shoppingItemList);

//** Array mit number */

const prices: number[] = [12.99, 99.99, 77.99, 2.99];
console.log(prices);

//** Array mit boolean */

const booleanArray: boolean[] = [true, true, false, false, true];
console.log(booleanArray);

//** wenn wir auf ein Element (index) von unserer Array zugreifen möchten  */

const iceCreamVariable: string = shoppingItemList[2];
console.log(iceCreamVariable);

const brokkoliVariable: string = shoppingItemList[5];
console.log(brokkoliVariable);

//** wir können ein Element (index) von unserer Array überschreiben. Wenn ein index als string deklariert ist, darf sie auch nur in einen anderen string überschrieben werden */

//? Beispiel 01

shoppingItemList[2] = "Karotte";
console.log(shoppingItemList);

//? Beispiel 02

shoppingItemList[3] = "Peanut Butter";
console.log(shoppingItemList);

//** Methode 01 => length --> sagt wie viele Elemente in einem Array sind */

console.log(
  "Länge der Array. Wie viele index Elemente befinden sich im Array ? ",
  shoppingItemList.length
);

//** Methode 02 => push() */

shoppingItemList.push("Pasta");
console.log(shoppingItemList);

//? Wir können auch mehrere Elemente auf einmal pushen

shoppingItemList.push("Pizza", "Cola");
console.log(shoppingItemList);

//** Methode 03 => unshift() --> erstellt ein neues Element und setzt es an den Anfang der index Liste  */

shoppingItemList.unshift("Tea", "Cookies");
console.log(shoppingItemList);

//** Methode 04 => pop() --> kann das letzte Element aus der index Liste entfernen. Kann das Element zusätzlich in eine Variable abspeichern */

const colaVariable = shoppingItemList.pop();
console.log(colaVariable);
console.log(shoppingItemList);

shoppingItemList.pop();
console.log(shoppingItemList);

//** Methode 05 => shift() --> entfernt das erste Element aus der index Liste. Kann das Element auch in einer Variable abspeichern. */

const TeaVariable = shoppingItemList.shift();
console.log(TeaVariable);
console.log(shoppingItemList);

shoppingItemList.shift();
console.log(shoppingItemList);

//** Methode 06 => splice --> bekommt von uns 2 Werte aus der Liste -- entfernt von einem Array ein Element  : ab index in Länge */

const karottenEntfernen = shoppingItemList.splice(2, 3);
console.log(karottenEntfernen);
console.log(shoppingItemList);

//** bekommt von uns 3 Argumente => ersetzt ein Element mit einem neuen Element */

//** Methode 08 => slice --> kopiert Teile des Array */

const AllItemsSliceAbPositionZwei = shoppingItemList.slice(2);
console.log(AllItemsSliceAbPositionZwei);

//? bei Slice muss der 2. Wert immer eins weiter sein, da der letzte nicht mehr dabei ist

const EggUndOsaftKopieren = AllItemsSliceAbPositionZwei.slice(1, 3);
console.log(EggUndOsaftKopieren);

//** Methode 09 => split -->  Teilt einen string in mehrere Teile auf */
const einText: string = "Hallo, ich lerne Ararys Methoden";

//? Gibt einzelene Buchstaben/Zeichen zurück

const einTextToArrayZeichen = einText.split("");
console.log(einTextToArrayZeichen);

//? Gibt einzelene Wörter zurück

const einTextToArrayWort = einText.split(" ");
console.log(einTextToArrayWort);

//? Gibt ganzen Satz zurück

const einTextToArraySatz = einText.split(".");
console.log(einTextToArraySatz);

//? Gibt einen ganzen Satz als String zurück

const einArrayToString = einTextToArraySatz.join();
console.log(einArrayToString);
