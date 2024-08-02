const cocktails: string[] = [
  "Pina Colada",
  "Mojito",
  "Long Island Ice Tea",
  "Mojito",
  "Cuba Libre",
  "Pina Colada",
];

console.log(cocktails);
console.log(cocktails.length);

// * Set => verhält sich wie ein Array - lässt aber nur eindeutige Werte zu
// => 01. add
// => 02. has
// => 03. size

const cocktailsSet = new Set<string>();
cocktailsSet.add("Pina Colada");
cocktailsSet.add("Cuba Libre");
// cocktailsSet.add("Pina Colada")
// cocktailsSet.add("Mojito")
cocktailsSet.add("Cuba Libre");

// ? Obwohl ich ein paar Cocktails wiederholt habe, werden sie trotzdem 1x hinzugefügt
console.log(cocktailsSet);
console.log(cocktailsSet.size);

// ? has ist irgendwie ähnlich wie includes
if (cocktailsSet.has("Mojito")) {
  console.log("Es gibt Mojito");
} else {
  console.log("Es gibt kein Mojito");
}

console.log(cocktails[2]);

//  ! kein Indexzugriff möglich bei Set
// console.log(cocktailsSet[2]);

cocktailsSet.forEach((cocktail) => console.log(cocktail));

const kostenSet = new Set<number>();

kostenSet.add(100);
kostenSet.add(1);
kostenSet.add(20);
kostenSet.add(4);
kostenSet.add(4);

console.log(kostenSet);

kostenSet.forEach((zahl: number) => {
  console.log(zahl);
});

// ! Entwickler 1
const setA = new Set([1, 2, 3]);
console.log(setA);

// ! Entwickler 2
const setB = new Set([1, 3, 5, 7]);
console.log(setB);

const datenBank = new Set([...setA, ...setB]);

console.log(datenBank);

// ? erst machen wir aus dem Array ein Set
const cleanUpCocktails = new Set(cocktails);
console.log({ cleanUpCocktails });

// ? dann wandlen wir das Set wieder in ein Array um
// ? das kann mit Array.from machen
const cleanUpCocktailsToArray = Array.from(cleanUpCocktails);

console.log(cleanUpCocktailsToArray);

// const einString = "Hello World"
// console.log(einString.split(""));

const einObj = {
  firstName: "John",
  lastName: "Nero",
};

console.log(einObj);

// ******** Map ********* ist ein spezielles Object
// 01. set
// 02. get

// ! *** Bsp1
const germanEnglishDictionary = new Map<string, string>();
germanEnglishDictionary.set("Tier", "Animal");
germanEnglishDictionary.set("froh", "happy");
germanEnglishDictionary.set("Montag", "Monday");

console.log(germanEnglishDictionary);

germanEnglishDictionary.forEach((value, key) => {
  console.log(`${key} heißt übersetzt ${value}`);
});

console.log("guck mal ob Tier das ist", germanEnglishDictionary.get("Tier"));

// ! **** Bsp2

// ? wir können auch eine Speisekarte mit Map umsetzen

const italienMenu = new Map<number, string>();
italienMenu.set(7.0, "Bruscetta");
italienMenu.set(9.0, "Pizza Margarita");
italienMenu.set(14.0, "Pizza Funghi");

console.log(italienMenu);

console.log("Pizza mit 14 euro", italienMenu.get(14.0));

italienMenu.forEach((essen) => console.log(essen));

// ! **** Bsp3

const iceMenu = new Map<number, string>();
iceMenu.set(10, "Himbeere");
iceMenu.set(11, "Erdbeere");
iceMenu.set(12, "Mandel");

console.log(iceMenu);

// ! *** Bsp4

const iceMenu2 = new Map<number, string>();

const flavors = ["Himbeere", "Erdbeere", "Mandel"];

flavors.forEach((flavor, index) => {
  iceMenu2.set(index, flavor);
});

console.log(iceMenu2);
