const oldHollywoodActors: string[] = [
  "Marlon Brando",
  "Audrey Hepburn",
  "Elizabeth Taylor",
  "Cary Grant",
  "Paul Newman",
  "Doris Day",
];
console.log(oldHollywoodActors);

let actorsReference: string[] = [...oldHollywoodActors];

oldHollywoodActors.push("Marilyn Monroe");
console.log(oldHollywoodActors);

const copy_concat: string[] = oldHollywoodActors.concat();
console.log(copy_concat);

const copy_slice: string[] = copy_concat.concat();
console.log(copy_slice);

const copy_spread: string[] = copy_slice.concat();
console.log(copy_spread);

copy_concat.push("Jimmy Hendrix");
copy_slice.shift();
copy_spread.pop();

console.log(oldHollywoodActors);
console.log(copy_concat);
console.log(copy_slice);
console.log(copy_spread);
