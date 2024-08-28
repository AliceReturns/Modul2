console.clear();

const calculateSumAndMore = (
  a: number,
  b: number,
  callback: (result1: number) => number,
  callback2: (result2: number) => string
) => {
  const sum = a + b;
  const result1 = callback(sum);
  const result2 = callback2(result1);
  return result2;
};

// Funktion 1 Verdoppelt die Summe
const doubleValue = (result1: number): number => {
  return result1 * 2;
};

// Zweite Callback-Funktion: Wandelt das Ergebnis in eine Binärzahl um
const toBinaryString = (result2: number): string => {
  return result2.toString(2); // Umwandlung in eine Binärzahl als String
};

// Beispiel: Aufruf von calculateSumAndMore
const finalResult = calculateSumAndMore(5, 10, doubleValue, toBinaryString);
console.log("Finales Ergebnis von calculateSumAndMore:", finalResult);

// Beispiele: Aufruf von calculateSumAndMore mit verschiedenen Zahlen
const testCases = [
  { a: 5, b: 10 },
  { a: 7, b: 15 },
  { a: 3, b: 6 },
  { a: 12, b: 25 },
];

testCases.forEach(({ a, b }) => {
  const finalResult = calculateSumAndMore(a, b, doubleValue, toBinaryString);
  console.log(
    `Finales Ergebnis von calculateSumAndMore für ${a} und ${b}:`,
    finalResult
  );
});
