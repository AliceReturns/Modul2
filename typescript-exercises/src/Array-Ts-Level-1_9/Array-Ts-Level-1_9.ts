import { ar } from "date-fns/locale";

const arrayNumberAufgabe: number[] = [23, 54, 75];
console.log(arrayNumberAufgabe);

arrayNumberAufgabe.push(22, 30, 45, 5, 12);
console.log(arrayNumberAufgabe);

arrayNumberAufgabe.unshift(1, 3, 27, 0, 18);
console.log(arrayNumberAufgabe);

arrayNumberAufgabe.pop();
arrayNumberAufgabe.pop();
console.log(arrayNumberAufgabe);

arrayNumberAufgabe.shift();
arrayNumberAufgabe.shift();
console.log(arrayNumberAufgabe);
