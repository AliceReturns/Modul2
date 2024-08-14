console.clear();

const textInput = document.getElementById("textInput") as HTMLInputElement;
const countUpperCaseBtn = document.getElementById(
  "countUpperCaseBtn"
) as HTMLButtonElement;
const countTextSpacesBtn = document.getElementById(
  "countTextSpacesBtn"
) as HTMLButtonElement;
const countVocalsBtn = document.getElementById(
  "countVocalsBtn"
) as HTMLButtonElement;
const outputDiv = document.getElementById("output") as HTMLDivElement;

// Funktion, die die Anzahl der Großbuchstaben zählt
let countUpperCaseFunction = () => {
  const text = textInput.value;
  const upperCaseLetters = text.match(/[A-Z]/g);
  const upperCaseLettersCount = upperCaseLetters ? upperCaseLetters.length : 0;

  if (outputDiv) {
    outputDiv.textContent = `Anzahl der Großbuchstaben: ${upperCaseLettersCount}`;
  }
};

// Funktion, die die Anzahl der Leerzeichen zählt
let countTextSpacesFunction = () => {
  const text = textInput.value;
  const spacesCount = (text.match(/ /g) || []).length;

  if (outputDiv) {
    outputDiv.textContent = `Anzahl der Leerzeichen: ${spacesCount}`;
  }
};

// Funktion, die die Anzahl der Vokale zählt
let countVocalsFunction = () => {
  const text = textInput.value;
  const vocals = text.match(/[aeiouAEIOU]/g);
  const vocalsCount = vocals ? vocals.length : 0;

  if (outputDiv) {
    outputDiv.textContent = `Anzahl der Vokale: ${vocalsCount}`;
  }
};

// Event Listener für die Buttons
if (countUpperCaseBtn) {
  countUpperCaseBtn.addEventListener("click", countUpperCaseFunction);
}

if (countTextSpacesBtn) {
  countTextSpacesBtn.addEventListener("click", countTextSpacesFunction);
}

if (countVocalsBtn) {
  countVocalsBtn.addEventListener("click", countVocalsFunction);
}
