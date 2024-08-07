console.clear();

//** undefined, null and any are all types that can be assigned to a variable /

//** undefined is a type itself, and it is used when a variable is not assigned a value */

//? undefined */

//** kassischer Fall : Variable wurde deklariert aber es wurde kein Wert zugewiesen */

// ! ============ undefined, null, any =================

// * === undefined ====
// * klassischer Fall: Variable wurde deklariert, Aber es wurde ihr kein Wert zugewiesen
let sum20: number;

// console.log({ sum20 });
// ! das darf nicht vergessen hinter dem undefined versteckt sich ein true/false
// if (sum20) {
//     console.log("Deine Zahl wurde gefunden");
// }

// * Weiterer Fall: Wenn eine function keinen expliziten Rückgabenwert hat, gib uns eine undefined zurück

// function myFunc() { }

// console.log(myFunc());

// * oder letzter Fall: Der Zugriff auf nicht existierende Eigenschaften eines Objects

// let einObject = {}
// console.log(einObject.username);

// * Mit Array

type PlantsSchema = { name: string; color: string };

const plants: PlantsSchema[] = [
  { name: "Rose", color: "red" },
  { name: "Ivy", color: "green" },
  { name: "Lavender", color: "purple" },
];

// ! mit geschweifte Klammern kommt immer return mit
// ? Find gibt undefined zurück, wenn kein Ergebnis gefunden wurde
const rosePlant = plants.find((plant: PlantsSchema) => {
  return plant.name.includes("kaktus");
});

console.log(rosePlant);

// * ====== null ====== wenn etwas nicht im vorhanden ist/ nicht exitiert

const meinBtn = document.getElementById("mein-buttn");
console.log(meinBtn);

// ? wann nicht undefined ?

// unedfined bedeutet in TS, dass eine variable deklariert wurde, aber nicht initialiert wurde

// ? Elvis-Operator kann nur bei zuweisungen und ausgaben verwendet werden, kurz gesagt => auf der rechten Seite

const someText = meinBtn?.innerText;
console.log(someText);

// ===> weitere Bsp für null ======

//? man kann null verwenden, um eine Variable zu initialisieren, die später einen Objektwert erhalten soll
let user = null;

console.log(user);

// Später im Code, wenn der Benutzer eingeloggt ist
user = {
  name: "Joe Doe",
  age: 20,
};

console.log(user);

type UserSchema = {
  id: number;
  name: string;
};

const users: UserSchema[] = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Steve" },
  { id: 3, name: "Victoria" },
];

function findUserById(id: number) {
  for (let user of users) {
    if (user.id === id) {
      return user;
    }
  }
  return null; // Kein User mit der gegebenen ID gefunden, weil es nicht exitiert
  // mit dem undefined, man kann davon ausgehen dass User exitiert aber wir können darauf nicht zugreifen
}

const user2 = findUserById(2);
console.log(user2);

const user4 = findUserById(4);
console.log(user4);

// * ====== any =======
// ! sollte sehr sehr sehr selten verwendet werden,bei any sparsam sein
const someUser: any = {
  name: "Robin",
};

const iAmEveryThing: any = { firstName: "Christian", lastName: "Henschel" };
iAmEveryThing.city = "Dresden";
iAmEveryThing.isMarried = true;
console.log(iAmEveryThing);

function returnAnyThing(): any {
  return "Hello World";
}

console.log(returnAnyThing());
