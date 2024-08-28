console.clear();

const addNumbers = (a: number, b: number, callback: (sum: number) => void) => {
  return callback(a + b);
};

//* Variante 1 Mit separater Funktion
//* Vorteilhaft, wenn die Callback-Logik an mehreren Stellen im Code wiederverwendet werden soll.

const logSum = (sum: number) => {
  console.log(sum);
};

addNumbers(2, 3, logSum);

//* Variante 2 Direkte Arrow-Schreibweise
//* Praktisch, wenn die Logik nur einmalig oder sehr spezifisch ist.

// addNumbers(2, 3, (sum) => {
//   console.log(sum);
// });
