console.clear();

function geburtsAlterRechner(birthYear: number): number {
  //return 2024 - birthYear;
  const aktuellesJahr = new Date().getFullYear();
  return aktuellesJahr - birthYear;
}

let YourAge = geburtsAlterRechner(1992);
console.log(YourAge);

function altersVergleich(age1: number, age2: number): number {
  return age1 - age2;
}

let alter1 = geburtsAlterRechner(1992);
let alter2 = geburtsAlterRechner(1990);

let altersUnterschied = altersVergleich(alter2, alter1);
console.log(altersUnterschied);
