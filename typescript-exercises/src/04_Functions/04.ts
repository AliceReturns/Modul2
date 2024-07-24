console.clear();
console.log("Hallo :)");

let counter: number = 0; // <-- counter startet bei 0
const counterElement = document.getElementById("counter");
const buttonElement = document.getElementById("button-count")!; // <-- Ausrufezeichen sagt dem Programm alles in Ordnung

console.log(counterElement);
console.log(buttonElement);

function handCounterButton(event: MouseEvent) {
  // <-- event ist die Anweisung, die eine function ausführen soll
  event.preventDefault(); // <-- so wird die Seite nicht immer wieder neu geladen
  counter++; // <-- oder counter = counter + 1 (eins wird immer dazu gerechnet)
  console.log(counter); // <-- gibt den counter aus
  if (counterElement) {
    counterElement.textContent = counter.toString();
  }
}

buttonElement.addEventListener("click", handCounterButton);

let counter2: number = 0;

const counterElement2 = document.getElementById("counter") ?? new HTMLElement(); // 1. ? Überprüft nach Fehlern 2. ? Erzeugt neues HTML Element falls 1. ? Fragezeichen Fehler erkennt
const buttonElement2 = document.getElementById("button-count");

function handCounterButton2(event: MouseEvent) {
  event.preventDefault();
  counter++;
  console.log(counter);
}

buttonElement2?.addEventListener("click", handCounterButton2); // <-- Fragezeichen ersetzt hier die if Bedingugn in der oberen Function (prüft ob Element da ist (Elvis Operator))
