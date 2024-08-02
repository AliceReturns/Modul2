console.clear();

// Erstelle ein Tuple für einen Star-Wars-Schauspieler
type StarWarsActor = [string, string];

// Einzelnes Star-Wars-Schauspieler Tuple
let starWarsActor: StarWarsActor = ["Luke Skywalker", "Mark Hamill"];

// Array von Star-Wars-Schauspieler Tuples
let starWarsActors: StarWarsActor[] = [
  ["Luke Skywalker", "Mark Hamill"],
  ["Darth Vader", "James Earl Jones"],
  ["Yoda", "Frank Oz"],
  ["Han Solo", "Harrison Ford"],
  ["Princess Leia", "Carrie Fisher"],
];

console.log(starWarsActors);

// Schleife durch das Array und Ausgabe auf der Konsole
for (let actor of starWarsActors) {
  let [character, name] = actor;
  console.log(`${name} spielt ${character}`);
}
