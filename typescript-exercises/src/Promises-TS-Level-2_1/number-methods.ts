console.clear();

// number-methods.ts

const numberMethods = new Promise<number[]>((resolve, reject) => {
  // Generiere drei zufällige Werte zwischen 1 und 130
  const randomNumbers = Array.from(
    { length: 3 },
    () => Math.floor(Math.random() * 130) + 1
  );

  console.log("Generierte Zufallszahlen:", randomNumbers);

  // Überprüfe, ob einer der Werte größer als 100 ist
  if (randomNumbers.some((num) => num > 100)) {
    reject("Fehlermeldung: Einer der Werte ist größer als 100.");
  } else {
    resolve(randomNumbers); // Gib die Werte in einem Array zurück
  }
});

numberMethods
  .then((numbers) => {
    // Hinzufügen von 7 zu jeder Zahl im Array
    const updatedNumbers = numbers.map((num) => num + 7);
    console.log("Zahl(en) +7:", updatedNumbers);
    return updatedNumbers; // Rückgabe für die nächste Verarbeitung
  })
  .then((numbers) => {
    // Multiplizieren mit 2
    const updatedNumbers = numbers.map((num) => num * 2);
    console.log("Zahl(en) *2:", updatedNumbers);
    return updatedNumbers; // Rückgabe für die nächste Verarbeitung
  })
  .then((numbers) => {
    // Subtrahieren von 1
    const updatedNumbers = numbers.map((num) => num - 1);
    console.log("Zahl(en) -1:", updatedNumbers);
    return updatedNumbers; // Rückgabe für die nächste Verarbeitung
  })
  .then((numbers) => {
    // Modulo 2 (Berechnung des Restes der Division durch 2)
    const updatedNumbers = numbers.map((num) => num % 2);
    console.log("Zahl(en) %2:", updatedNumbers);
    return updatedNumbers; // Rückgabe (optional, falls weitere Verarbeitung benötigt wird)
  })
  .then((numbers) => {
    console.log("Endergebnis:", numbers); // Ausgabe des Endergebnisses
  })
  .catch((error) => {
    console.error("Fehler:", error); // Ausgabe der Fehlermeldung, falls reject aufgerufen wurde
  })
  .finally(() => {
    console.log("Finished"); // Diese Nachricht wird immer ausgegeben, unabhängig vom Ergebnis
  });
