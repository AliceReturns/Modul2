// Funktion zur Umwandlung einer Zahl in ihren entsprechenden Textwert

const convertNumberToText = (num: number): string => {
  const numberTextMap = ["One", "Two", "Three", "Four", "Five"];

  // Überprüfen, ob die Zahl im gültigen Bereich liegt (1-5)

  if (num >= 1 && num <= 5) {
    return numberTextMap[num - 1];
  }

  // Rückgabe von "Unknown" für alle Zahlen außerhalb des gültigen Bereichs

  return "Unknown";
};

// Zufällige Zahl zwischen 1 und 7 generieren

const userInput: number = Math.ceil(Math.random() * 7);
console.log(`User Input: ${userInput}`);

// Zahl in Text umwandeln

const numberText = convertNumberToText(userInput);
console.log(`Number as Text: ${numberText}`);
