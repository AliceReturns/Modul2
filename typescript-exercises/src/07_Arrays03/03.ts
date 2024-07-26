console.clear();

import { eigthiesHits } from "./hits";

console.log(eigthiesHits);

//** 01. lastIndexOf() => gibt uns das zuletzt vorkommende Index als Zahl zurück bzw. zeigt die Position an */

const lastIndexOfRio: number = eigthiesHits.lastIndexOf("Rio");

console.log(lastIndexOfRio);

//** 02. includes() => gibt uns ein boolean Wert zurück und gibt an ob das Element existiert */

const taintedLoveInclude: boolean = eigthiesHits.includes("Tainted love"); // <-- Lied das gesucht wird
console.log(taintedLoveInclude);

if (taintedLoveInclude) {
  console.log("Dein Lied wurde gefunden"); //<- ausgabe wenn Lied vorhanden
} else {
  console.log("Es tut mir leid, es wurde nicht gefunden"); //<- ausgabe wenn Lied nicht vorhanden
}

//** 03. find() => gibt uns das erst vorkommende Array aus als string, number oder undefined */

const firstWithDont: string | undefined = eigthiesHits.find((hit) =>
  hit.startsWith("Dont")
);
console.log(firstWithDont);

//** 04. filter() => filtert alle ELemente heraus, die den Kriterie entsprchen. Das Ergebnis ist ein neues Array */

const firstWithDontFilter = eigthiesHits.filter(
  (hit: string) => hit.startsWith("Dont") //--> filtert nach Liedern die mit Dont starten (startsWith)
);
console.log(firstWithDontFilter);

const allWithLove = eigthiesHits.filter((hit: string) => hit.includes("Love"));
console.log(allWithLove); //--> filtert nach Liedern die Love beinhalten (includes)

//? Wenn das vom User kommt
// --> toLowerCase(), toUpperCase()

const loveSearchInput: string = "Love";

const allHitsWithLoveLowerCase = eigthiesHits.filter((hit: string) => {
  return hit.toLowerCase().includes(loveSearchInput.toLowerCase()); // --> Ändert alle Songs in klein Buchstaben plus die Eingabe des Users so dass Lieder mit "Love" und "love" gefunden werden
});

console.log(allHitsWithLoveLowerCase);

//? Wenn wir mehrere Bedingungen in einem Filter benötigen, können wir sie mit dem "oder oder" Zeichen verbinden -->  ||
//? bei && müssen beide Bedingungen stimmen || akzeptiert auch, wenn nur eine der beiden Bedingungen erfüllt wurde

const allHitsWithDontAndEnjoy = eigthiesHits.filter((hit: string) => {
  return hit.startsWith("Dont") || hit.startsWith("Enjoy");
});

console.log(allHitsWithDontAndEnjoy);

const allHitsLongerThan13Letter = eigthiesHits.filter(
  (hit: string) => hit.length > 13 // --> hier können wir nach einer bestimmten Länge filtern bzw. Anzahl der Buchstaben eines Songs mit hit.length > 13
);
console.log(allHitsLongerThan13Letter);
