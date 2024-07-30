//** break --> bricht die gesamte Schleife sofort ab */

console.log("%c Break", "background: white; color: red");

for (let i: number = 0; i < 10; i++) {
  console.log(i);
  if (i === 7) {
    break;
  }
}

console.log("%c Beispiel 1", "background: white; color: red");

function teilbarSieben(startNumber: number, endNumber: number): number[] {
  let result: number[] = [];
  for (let i: number = startNumber; i < endNumber; i++) {
    if (i % 7 === 0) console.log(i);
    result.push(i);
    break;
  }
  return result;
}

const resultFunction = teilbarSieben(14, 23);
console.log(resultFunction);

console.log("%c for Loop mit Continue", "background: white; color: red");

function teilbarSiebenContinue(
  startNumber: number,
  endNumber: number
): number[] {
  let result: number[] = [];
  for (let i: number = startNumber; i < endNumber; i++) {
    if (i % 7 === 0) {
      console.log(i);
      result.push(i);
      continue;
    }
  }
  return result;
}

const resultFunctionContinue = teilbarSiebenContinue(14, 23);
console.log(resultFunctionContinue);
