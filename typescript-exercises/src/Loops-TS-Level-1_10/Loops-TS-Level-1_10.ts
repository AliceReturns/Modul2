console.clear();

function getHighestNumber(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Array ist leer");
  }

  let highest: number = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i];
    }
  }

  return highest;
}

// Teste die Funktion mit verschiedenen Arrays
console.log(getHighestNumber([3, 5, 7, 2, 8])); // Sollte 8 ausgeben
console.log(getHighestNumber([-1, -5, -3, -7])); // Sollte -1 ausgeben
console.log(getHighestNumber([10, 20, 30, 40])); // Sollte 40 ausgeben
console.log(getHighestNumber([100])); // Sollte 100 ausgeben
