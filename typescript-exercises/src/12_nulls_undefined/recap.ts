//Arrays schreiben
//Arrays immer mit eckiger Klammer

const animals: string[] = ["dog", "cat", "bird"];

//Objects schreiben
//Objects immer mit geschweiften Klammern

const objectBeispiel = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// normale function schreiben
//function immer mit runden Klammern
// :void -> gibt nichts aus

function functionName(parameterOne: number, parameterTwo: number): number {
  return parameterOne + parameterTwo;
}

// function wird erst ausgeführt wenn sie aufgerufen wird
// function aufrufen

functionName(1, 2);

// Typen erstellen
// Typen immer mit großem Anfangsbuchstaben und geschweiften Klammern
// kann gemischte Typen in sich tragen (string, number, boolean, array)

type MyType = {
  key1: string;
  key2: number;
  key3: boolean;
  key4: string[];
};

// Array mit Typen schreiben
//Array immer mit eckigen Klammern
// Typen immer mit großem Anfangsbuchstaben und geschweiften Klammern
// bei Objekten immer mit Punkt auf das nächste Element zugreifen

const myTypes: MyType[] = [
  {
    key1: "value1",
    key2: 2,
    key3: true,
    key4: ["elephant", "tiger", "bird"],
  },

  {
    key1: "value2",
    key2: 4,
    key3: true,
    key4: ["pig", "cat", "snake"],
  },

  {
    key1: "value3",
    key2: 6,
    key3: false,
    key4: ["dog", "cat", "horse"],
  },
];

// auf Werte zugreiefen

console.log(myTypes[0].key1); // gibt value1 aus
console.log(myTypes[1].key4[1]); // gibt cat aus
console.log(myTypes[2].key2); // gibt 6 aus
console.log(myTypes[0].key3); // gibt true aus

// forEach Schleife
// forEach immer mit runden Klammern
// forEach gibt jeden Wert aus
// läuft nur durch erstellt aber nichts neues

myTypes.forEach((newName: MyType) => {
  console.log(newName.key1);
});

// map Schleife
// map immer mit runden Klammern
// map gibt jeden Wert aus
// erstellt eine neue Liste
// hier gibt es return

const newNames = myTypes.map((newName: MyType) => {
  return newName.key1;
});
