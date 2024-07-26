import { eigthiesHits } from "./hits";

//** 01. map() => map greift auf das Ursprungsarray zu und gibt uns ein neues Array zurück */

console.log(eigthiesHits);

const editedEigthiesHits: string[] = eigthiesHits.map((hit: string) => {
  return hit + "!"; // --> bearbeitet jedes einzelne Array und fügt ein ! hinzu oder was auch immer du hinzufügen möchtest
});

console.log(editedEigthiesHits);

const hitsUpperCase: string[] = eigthiesHits.map(
  (hit: string) => hit.toUpperCase() // --> Ändert alle Buchstaben in Großbuchstaben
);

console.log(hitsUpperCase);

// const emojiFruits = fruits.map((fruit: string) => {
//     switch(fruit){
//         case "Banana":
//             return "🍌"
//         case "Kiwi"
//             return "🥝"
//         case ""
//     }

// })

//** 02. forEach() => durchläuft alle Elemente, gibt uns aber kein neues Array zurück. Wir nutzen forEach() um ein Eelement direkt auszugeben. Wir können also speziell nach einem Element suchen und gibt es uns nur als string statt Array aus */

eigthiesHits.forEach((hit: string) => {
  if (hit.includes("Blue")) {
    console.log(`Best Song${hit}`);
  } else if (hit.includes("Rio")) {
    console.log(`Worst Song${hit}`);
  }
  console.log(`Good Song${hit}`);
});
