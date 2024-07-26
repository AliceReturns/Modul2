//** mehr-Dimensionale  --> Wir können mehrere Arrays in einem schreiben */

const shoppingListWeek: string[][] = [
  ["Water", "Beer", "Toilet Paper"],
  ["Coconut", "Lemons", "Cola"],
  ["Tea", "Coffee", "Gummy Bears"],
];

console.log(shoppingListWeek);

const beer = shoppingListWeek[0][1]; // --> nummer 0 für die Position der Liste (Sie wird 0, 1, 2 gezählt) // Die zweite Zahl steht für die Stelle, an der das Wort sich befindet (Hier auch wieder mit 0, 1, 2, 3 gezählt)
console.log(beer); // --> ein bestimmtes Wort aus mehreren Arrays ausgeben lassen

const cola = shoppingListWeek[1][2];
console.log(cola);
