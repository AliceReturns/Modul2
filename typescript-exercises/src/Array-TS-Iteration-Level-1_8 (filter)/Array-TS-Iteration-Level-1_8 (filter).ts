const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenNumbers(): void {
  const evenNumbers = zahlen.filter((num) => num % 2 === 0);
  console.log(evenNumbers);
}

printEvenNumbers();

function printOddNumbers(): void {
  const oddNumbers = zahlen.filter((num) => num % 2 !== 0);
  console.log(oddNumbers);
}

printOddNumbers();

function printNumbers(): void {
  const evenNumbers = printEvenNumbers();
  const oddNumbers = printOddNumbers();

  console.log("Even Numbers:", evenNumbers);
  console.log("Odd Numbers:", oddNumbers);
}
