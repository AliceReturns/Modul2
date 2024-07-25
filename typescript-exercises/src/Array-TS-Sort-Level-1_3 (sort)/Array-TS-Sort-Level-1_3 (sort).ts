console.clear();

let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
console.log(numArray1);

const rightOrder = [...numArray1].sort((a: number, b: number) => a - b);
console.log(rightOrder);

const reverseOrder = [...rightOrder].reverse();
console.log(reverseOrder);
