console.clear();

//! ============ Clean Code ============

//? Was ist Clean Code ?

// * Clean Code ist Code, der einfach zu lesen und zu verstehen ist.
// * Clean Code ist Code, der einfach zu warten ist.
// * Clean Code ist Code, der einfach zu testen ist.
// * Clean Code ist Code, der einfach zu erweitern ist.
// * Wichtige Eigenschaften -> Klarheit, Einfachheit, Lesbarkeit, Wartbarkeit, Testbarkeit, Erweiterbarkeit

//? Warum ist Clean Code wichtig ?

// * Clean Code macht die Softwareentwicklung schneller.
// * Clean Code macht die Softwareentwicklung einfacher.
// * Arbeit mit anderen Entwicklern wird einfacher. -> verständlich und Lesbar für andere Entwickler
// * Fehler finden und beheben wird einfacher. (geringere Fehlerquote)
// * erhöht die Produktivität

//? Was kann ich bei bestehemenden Code überprüfen & beachten ?

//? Variablen- und Funktionsnamen

// * Variablen- und Funktionsnamen -> sprechend, aussagekräftig, eindeutig
// * auf Englisch -> schreiben
// * camelCase -> verwenden (PascalCase für Types, Enums, Klassen)
// * boolean -> Namen mit is, has, can, should beginnen (isReady, hasError, canLogin, shouldShow, isUserLoggedIn)
// * Konstanten -> in Großbuchstaben
// * array -> Namen mit Plural (users, products, items)
// * Funktionen -> Namen mit Verb beginnen (getUser, fetchProducts, saveItem)
// * Klassen -> Namen mit Substantiv beginnen (Customer, Product, Order)

// * Kommentare -> erklären warum und nicht was
// * Einrückungen -> sauber und einheitlich
// * Leerzeichen -> sauber und einheitlich
// * Code Duplikate -> vermeiden
// * Funktionen -> nicht zu lang, nur eine Aufgabe
// * Klassen -> nicht zu lang, nur eine Aufgabe
// * Imports -> nur benötigte imports
// * Code Formatierung -> sauber und einheitlich
// * Tests -> vorhanden und aktuell
// * Fehlerbehandlung -> vorhanden und sinnvoll
// * Code Analyse -> durchführen

//? Funktionen

//! UNTERRICHT

//! =========== Clean Code ============
//-> Code, der einfach zu lesen, zu verstehen und zu warten ist
//-> wichtige Eigenschaften: Klarheit, Einfachheit, ...

//# Warum?
//-> Arbeit mit Anderen / im Team -> Code ist verstaendlich und lesbar
//-> reduziert die Fehlerquote
//-> erhoeht die Produktivitaet

//# Was kann ich bei besthendem Code ueberpruefen und bei meinem Code beachten?
//=> Variablennamen
//? bezeichnender Name (kein blah, blubb, iwas)
//? auf Englisch
//? camelCase (PascalCase fuer Types, Enums)
//? boolean: is, has, was, etc. immer vorne dran (bsp. isUserLoggedIn)
//? array: immer als Plural/ Mehrzahl
//? keine Namen die aus nur einem Buchstaben bestehen (ausser bei Mathe)

//$ ======= Bsp: =======
//! DON'T
// const a: number = 42;
// const login: number = 12;
// const user: boolean = true;
// const firstnameofuser: string = "Ahmed"
// const email: string[] = ["anne@mail.de", "victoria@mail.de", "kami@mail.de"]

//# DO
const averageAge: number = 42;
const totalLoginAttemps: number = 12;
const isUserLoggedIn: boolean = true;
const firstNameOfUser: string = "Ahmed";
const emails: string[] = ["anne@mail.de", "victoria@mail.de", "kami@mail.de"];
//$ =====================

//=> Funktionen
//-> Namen
//? camelCase
//? Verb-Objekt
//? sprechende, aussagekraeftige Namen
//? Abkuerzungen vermeiden
//? auf Englisch
//? Einzahl/ Mehrzahl beachten
//? get und set benutzen, falls ein Wert gesetzt wird
//-> Parameter
//? keine Typ-Definitionen (=> auslagern in einen Type)
//? nicht mehr als 5 Parameter (=> sonst Parameter-Objekt)
//-> Funktionalitaet
//? nicht mehr als 50 - 100 Zeilen
//? nur eine Funktionalitaet/ Aufgabe
//? code smell: wenn die FN ein And im Namen hat
//? kann ich etwas in eine Unterfunktion/ Hilfsfunktion auslagern => um die Lesbarkeit zu erleichtern

//$ ======= Bsp: =======
//! DON'T
// const MeineFNGBUD = (superParameter: {id: string; name: string}) => {
//     console.log(`${superParameter.name} hat die ID ${superParameter.id}`)
// }

// const createUser = (name: string, age: number, email: string, isActive: boolean, address: string) => {
//     // was auch immer die FN dann macht :-D
// }

// const processUserData = (users: UserInfo[]) => {
//   users.forEach((user) => {
//     console.log("iwas");
//     //mehr Logik
//   });

//weiter Dinge
// FN wird uber 50 Zilen lang
// };

//# DO
type Customer = {
  id: string;
  name: string;
};

const printUserData = (customer: Customer) => {
  console.log(`${customer.name} hat die ID ${customer.id}`);
};

//Parameter-Objekt
type UserInfo = {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  address: string;
};

const createUser = (userInfo: UserInfo) => {
  // was auch immer die FN dann macht :-D
};

// Hilfsfunktion
const processSingleUser = (user: UserInfo) => {
  console.log("iwas");
  //weitere Logik fuer die Verarbeitung eines einzelnen Nutzers
  // max 10 bis 20 Zeilen lang
};

const processUserData = (users: UserInfo[]) => {
  users.forEach((user) => processSingleUser(user));
};

//$ =====================

//=> Console.logs
//? alle unnoetigen entfernen

//=> Kommentare
//? wirklich noetig?
//? code smell: viele Kommentare => riecnt nach kompliziertem, nicht selbst erklaerendem Code
//? aktuell

//$ ======= Bsp: =======
//! DON'T
// berechne den Gesamtpreis mit Steuern
const calc = (a: number, tax: number): number => a + a * tax;

//# DO
const calculateTotalPrice = (price: number, taxRate: number): number =>
  price + price * taxRate;
//$ =====================

//=> Pfadfinderregel
//-> Verlasse jeden Ort sauberer, als du ihn vorgefunden hast.
//? hinterlasse Code besser als du ihn vorgefunden hast

//=> DRY-Prinzip
//-> Don't repat yourself
//? sprich: vermeide Wiederholungen im Code
//? immer uber den eigenen Code schauen und nach doppelter Logik suchen
//? ab 2 Zeilen / Dopplungen lohnt sich schon eine Funktion
//? ich nehme eine FN, wenn es an versch. Stellwn zu versch. Zeitpunkten benutzt wird
//? Loop zb auf Basis eines Arrays => wenn es nur an einer Stelle gebraucht wird

//$ ======= Bsp: =======
//! DON'T
const getUserFullName = (user: {
  firstName: string;
  lastName: string;
}): string => `${user.firstName} ${user.lastName}`;

const getAdminFullName = (admin: {
  firstName: string;
  lastName: string;
}): string => `${admin.firstName} ${admin.lastName}`;

//# DO
//erstmal Typedef
type Person = {
  firstName: string;
  lastName: string;
};

const getFullName = (person: Person) =>
  `${person.firstName} ${person.lastName}`;

//Nutzung fuer beide Faelle!
const userFullName = getFullName({ firstName: "Tolga", lastName: "Oezdemir" });
console.log({ userFullName });

const adminFullName = getFullName({ firstName: "Nana", lastName: "Leven" });
console.log({ adminFullName });

//! DON'T
// const blueBtn = document.createElement("button");
// blueBtn.textContent = "I am a blue Button";
// blueBtn.style.backgroundColor = "blue";
// blueBtn.style.color = "white";
// document.body.appendChild(blueBtn);

// const greenBtn = document.createElement("button");
// greenBtn.textContent = "I am a green Button";
// greenBtn.style.backgroundColor = "green";
// greenBtn.style.color = "white";
// document.body.appendChild(greenBtn);

// const redBtn = document.createElement("button");
// redBtn.textContent = "I am a red Button";
// redBtn.style.backgroundColor = "red";
// redBtn.style.color = "white";
// document.body.appendChild(redBtn);
//% ich wiederhole mich hier 3x 👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎👎

//# DO
const createColorBtn = (color: string) => {
  const colorBtn = document.createElement("button");
  colorBtn.textContent = `I am a ${color} Button`;
  colorBtn.style.backgroundColor = color;
  colorBtn.style.color = "white";
  document.body.appendChild(colorBtn);
};

createColorBtn("blue");
createColorBtn("red");
createColorBtn("green");
createColorBtn("purple");
createColorBtn("teal");

//? Loesung mit Loop
//? fuer den Loopd spricht die sehr einfache Erweiterbarkeit - ich kann einfach eine weitere Farbe ins Array aufnehmen

const colors: string[] = ["blue", "green", "purple", "orange", "teal"];
colors.forEach((color: string) => {
  const colorBtn = document.createElement("button");
  colorBtn.textContent = `I am a ${color} Button`;
  colorBtn.style.backgroundColor = color;
  colorBtn.style.color = "white";
  document.body.appendChild(colorBtn);
});

//$ =====================

//=> YAGNI-Prinzip
//-> You ain't gonna need it
//? wurde nur das umgesetzt, was verlangt ist?
//? habe ich Sachen schon mal vorgesehen, die garnicht benutzt werden?? => direkt wieder loeschen

//$ ======= Bsp: =======
//! DON'T
// const addNumbers = (a: number, b: number) : number => {
//     const result = a + b;
//     const someVariable = 10;
//     return result
// }

//# DO
const addNumbers = (a: number, b: number): number => a + b;

//$ =====================
