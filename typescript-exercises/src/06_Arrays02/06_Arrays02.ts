//** Array => Kopieren -->  */

const emptyArray: string[] = [];
console.log(emptyArray);
emptyArray[5] = "Ich bin ein neues Kind";
console.log(emptyArray);
emptyArray[1] = "Ich bin das erste Kind";
console.log(emptyArray);
console.log(emptyArray[2]);

//** Kopieren mit einfachen Datentypen */

let pricesShoes: number = 69.99;
console.log("pricesShoes", pricesShoes);
let kopiedPricesSHoes = pricesShoes;
console.log("von der Änderung", kopiedPricesSHoes);
kopiedPricesSHoes = 29.99;
console.log(kopiedPricesSHoes);
console.log(pricesShoes);

//** Kopiere ein Array auf eine alte Art und Weise */

const fruits: string[] = ["Ananas", "Banane", "Kirschen", "Orangen"];

let realcopyfruits01 = fruits;

//** Array richtig kopieren */

//* 01. Slice

const realcopyfruits: string[] = fruits.slice();
realcopyfruits.pop();
console.log(fruits);
console.log(realcopyfruits);

//** 02. concat() => ohne Parameter funktioniert concat() wie ein kopieren */

const copyFruitsWithConcat: string[] = fruits.concat();

copyFruitsWithConcat.shift();
console.log(fruits);
console.log(copyFruitsWithConcat);

//** 03. spread Operator "..." => kopiert alle Elemente. Wird immer am Ende geschrieben  */

const copyWithSpread: string[] = [...fruits];
copyWithSpread.push("Birne");
console.log(fruits);
console.log(copyWithSpread);

// * 03.01 spread Operator kann auch mehrere Array kopieren

const fruitsVeggieWithSpread: string[] = [...fruits, ...vegetables, ...potatos];
console.log(fruitsVeggieWithSpread);
