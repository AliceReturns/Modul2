console.clear();

function getNumberOfVowels(vowelsString: string): number {
  const umlauteArray: string[] = [
    "A",
    "E",
    "I",
    "O",
    "U",
    "a",
    "e",
    "i",
    "o",
    "u",
  ];
  // Schritt 2: Initialisiere die Zählvariable
  let vowelCount: number = 0;

  // Schritt 3: Durchlaufe jeden Buchstaben im String
  for (let i = 0; i < vowelsString.length; i++) {
    let aktuellerBuchstabeSpeichern = vowelsString[i]; // Aktuellen Buchstaben speichern

    // Schritt 4: Überprüfe, ob der Buchstabe ein Vokal ist
    if (umlauteArray.includes(aktuellerBuchstabeSpeichern)) {
      vowelCount++; // Erhöhe die Vokalanzahl
    }
  }

  // Schritt 5: Gib die Vokalanzahl zurück
  return vowelCount;
}

// Teste die Funktion mit verschiedenen Strings
console.log(getNumberOfVowels("Hello World")); // Ausgabe: 3 (E, O, O)
console.log(getNumberOfVowels("OpenAI")); // Ausgabe: 3 (O, e, A, I)
console.log(getNumberOfVowels("Artificial Intelligence")); // Ausgabe: 8 (A, i, i, a, I, i, e, e)
console.log(getNumberOfVowels("Testing")); // Ausgabe: 2 (e, i)
