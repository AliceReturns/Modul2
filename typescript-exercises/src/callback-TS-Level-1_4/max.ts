console.clear();

// Definition der Funktion showMaximum
function showMaximum(
  numbers: number[],
  callback: (max: number) => number
): void {
  // Berechnung des Maximums mit Math.max und Spread-Syntax
  const maxNumber = Math.max(...numbers);

  // Ausgabe des Maximums auf der Konsole
  console.log("Das Maximum im Array ist:", maxNumber);

  // Aufruf des Callback mit dem Maximum
  const result = callback(maxNumber);

  // Ausgabe des Ergebnisses der Callback-Funktion auf der Konsole
  console.log("Das Ergebnis der Callback-Funktion ist:", result);

  // Abschließende Nachricht
  console.log("Finished with showMaximum");
}

// Funktion powerOfTen
const powerOfTen = (number: number): number => {
  return number ** 10;
};

// Beispiel: Aufruf von showMaximum mit powerOfTen als Callback
showMaximum([1, 2, 3, 4, 5], powerOfTen);
