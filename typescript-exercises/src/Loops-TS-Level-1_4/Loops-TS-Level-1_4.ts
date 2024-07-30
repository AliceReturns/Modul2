console.clear();

let friendNames: string[] = [
  "Georg",
  "Anass",
  "Elaine",
  "Hakan",
  "Eric",
  "Kim",
  "Sergio",
];

for (let i: number = 0; i < friendNames.length; i++) {
  console.log(friendNames[i]);
}

for (let names of friendNames) {
  console.log(names);
}
