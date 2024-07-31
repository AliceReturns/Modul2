console.clear();

function calculateSum(maxNumber: number): number {
  let sum: number = 0; // Variable zur Speicherung der Summe, initial auf 0 setzen

  // Schleife von 1 bis maxNumber
  for (let i = 1; i <= maxNumber; i++) {
    sum += i; // Addiere die aktuelle Zahl zur Summe hinzu
  }

  return sum; // Rückgabe der berechneten Summe
}

// Teste die Funktion mit verschiedenen maxNumber-Werten
console.log(calculateSum(5)); // Sollte 15 ausgeben (1 + 2 + 3 + 4 + 5 = 15)
console.log(calculateSum(10)); // Sollte 55 ausgeben (1 + 2 + 3 + ... + 10 = 55)
console.log(calculateSum(100)); // Sollte 5050 ausgeben (Summe der ersten 100 Zahlen)
