console.clear();

const words = [
  "Abendbrot",
  "Brueckentag",
  "Erklaerungsnot",
  "Fingerspitzengefuehl",
  "Fremdschaemen",
  "Geborgenheit",
  "Geschmacksverirrung",
  "Schweinehund",
  "Kopfkino",
  "Kummerspeck",
  "Schnapsidee",
  "Torschlusspanik",
  "verabredet",
  "verschlimmbessern",
  "Vorfreude",
  "Weltschmerz",
  "Zeitgeist",
  "Zugzwang",
];

const letters: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(letters);

const spielstand = document.getElementById("spielstand") as HTMLDivElement;
const buttonContainer = document.getElementById("buttons") as HTMLDivElement;
const randomWort = document.getElementById("random-wort") as HTMLButtonElement;
const spielfeld = document.getElementById("spielfeld") as HTMLDivElement;

let randomWord: string = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

for (let i = 0; i < randomWord.length; i++) {
  const pTag = document.createElement("p") as HTMLParagraphElement;
  pTag.textContent = "_";
  spielfeld.appendChild(pTag);
}

letters.forEach((letter: string) => {
  const button = document.createElement("buttons") as HTMLButtonElement;
  button.textContent = letter;
  button.addEventListener("click", () => {
    button.disabled = true;
    const btnClicked = event.target as HTMLButtonElement;
    wordArray.forEach((letter: string) => {
        if (letter === btnClicked.textContent) {
            console.log("Buchstabe gefunden");

  });
  buttonContainer.appendChild(button);
});
