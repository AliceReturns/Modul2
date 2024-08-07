console.clear();

// * Wann lege ich Elemente in HTML Datai an und wann im TS Code ?
// ? Alles was unveränderlich ist, direkt im HTML Datai wie z.B Überschrift
// ? Alles was dynamisch ist, bzw. sich ändern kann, oder erzeugt werden soll, direkt im TS Code

// ? querySelector
// ? holt sich nur das erste Element auf das die Bedingung zutrifft
// ? wir können hier die bekannte css-Syntax nutzen: mit . auf Klassen mit # auf ids, oder div auf div-Elemente
// ? es kann aber sogar sowas wie   li:nth-child(0) genutzt werden
// const fruitListELementWithQuerySelector = document.querySelector('.fruits');

// ? Zugriff über den div-Elementtyp - holt das erste div aus dem HTML
// const fruitListElementWithDiv = document.querySelector('div');

// ? querySelectorAll
// ? holt sich alle Element, auf die die Bedingung zutrifft
// const allDivElements = document.querySelectorAll('div');

// * 3. Daten darstellen
// ? immer eine Funktion anlegen, die die Daten darstellt
// ? wird meinstens mehrfach verwendet und macht den Code lesbarer
// ? gute Namen sind: render... oder show.. oder createAll...

type FruitSchema = {
  name: string;
  emoji: string;
  color: string;
};

const fruitsArrays: FruitSchema[] = [
  { name: "Apple", color: "#ff0800", emoji: "🍎" },
  { name: "Banana", color: "#ffe135", emoji: "🍌" },
  { name: "Grapes", color: "#6f2da8", emoji: "🍇" },
  { name: "Orange", color: "#ffa500", emoji: "🍊" },
  { name: "Strawberry", color: "#fc5a8d", emoji: "🍓" },
  { name: "Watermelon", color: "#fc6c85", emoji: "🍉" },
  { name: "Lemon", color: "yellow", emoji: "🍉" },
];

console.log(fruitsArrays);

const fruitListElement = document.getElementById(
  "fruit-list"
) as HTMLDivElement;

const ueberschrift = document.getElementById(
  "selected-fruit"
) as HTMLHeadElement;

function renderFruit(): void {
  fruitsArrays.forEach((fruitButton: FruitSchema, index: number) => {
    console.log(index);

    //  bei createElement kann ich alle Arten von HTML-Elementen erzeugen
    const fruitButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;

    //  über style kann ich direkt Eigenschaften für das Styling setzen
    fruitButtonElement.style.backgroundColor = fruitButton.color;

    //fruitButtonElement.innerText => nur zum Text setzen
    //fruitButtonElement.innerHTML => zum Setzen des HTML
    //  innerHTML verwenden, wenn man mehr als nur Text setzen möchte - auch Tags etc.
    // oder immer innerHTML verwenden, das geht immer
    fruitButtonElement.innerText = `${fruitButton.emoji} ${fruitButton.name}`;

    //  so könnte ich eine eindeutige id pro Button im TypeScript Code festlegen
    //  im HTML entspricht das <button id='0'> <button id='1'> ...
    fruitButtonElement.setAttribute("id", index.toString());

    // ? wir wollen gleich einen EventListener mit generieren, der beim Klick die untere Ergebnisausgabe verändert
    // ? wir reagieren auf den Klick des jeweiligen Buttons
    function printFruit() {
      ueberschrift.innerText = `You Picked ${fruitButton.emoji} ${fruitButton.name}`;
    }

    if (ueberschrift) {
      fruitButtonElement.addEventListener("click", printFruit);
    }

    fruitListElement.appendChild(fruitButtonElement);
  });
}

renderFruit();

console.clear();

const meinHeadline = document.getElementById(
  "mein-headline"
) as HTMLHeadElement;
console.log(meinHeadline);

const mein_button = document.getElementById("mein_button") as HTMLButtonElement;

console.log(mein_button);

meinHeadline.style.color = "red";

// * getElementById , querySelector
// * getElementByClass, querySelectorAll

const alleHeadLineElemente = document.querySelectorAll("li");
console.log(alleHeadLineElemente);

alleHeadLineElemente[2].innerText = "Ich bin das dritte Kind";

alleHeadLineElemente[0].innerText = "Ich bin das erste kind";
alleHeadLineElemente[0].style.color = "green";

console.log(typeof alleHeadLineElemente);

alleHeadLineElemente.forEach((element) => {
  element.style.color = "red";
});

const einImage = document.createElement("img") as HTMLImageElement;
einImage.setAttribute("src", "https://picsum.photos/id/237/200/300");
einImage.setAttribute("alt", "eine alternative Description");
einImage.setAttribute("style", "width: 500px");
einImage.style.border = "4px solid red";
einImage.src = "https://picsum.photos/id/211/200/300";

const testingArea = document.getElementById("testingArea") as HTMLDivElement;
testingArea.appendChild(einImage);

const einAnchorTag = document.createElement("a");
einAnchorTag.setAttribute("href", "https://www.google.de/?hl=de");
einAnchorTag.style.color = "black";
einAnchorTag.textContent = "klick mich";

testingArea.appendChild(einAnchorTag);
