console.clear();

import IceCreamFlavor from "./iceCreamFlavour";

const vanilla: IceCreamFlavor = new IceCreamFlavor("Vanilla", 2.5, true);
console.log(vanilla);

const chocolate: IceCreamFlavor = new IceCreamFlavor("Chocolate", 3.5, true);
console.log(chocolate);

const strawberry: IceCreamFlavor = new IceCreamFlavor("Strawberry", 4.5, false);
console.log(strawberry);

const mint: IceCreamFlavor = new IceCreamFlavor("Mint", 5.5, false);
console.log(mint);

// Array mit den 4 Eissorten
const iceCreamFlavors = [vanilla, chocolate, strawberry, mint];

// Namen der populären Eissorten ausgeben
iceCreamFlavors.forEach((flavor) => {
  if (flavor._isPopular) {
    console.log(flavor._name);
  }
});

console.log(vanilla._isPopular);
console.log(chocolate._isPopular);
console.log(strawberry._isPopular);
console.log(mint._isPopular);

vanilla.printInfo();
vanilla.getTotalPrice(2);
vanilla.getLengthOfDescription();

chocolate.printInfo();
chocolate.getTotalPrice(2);
chocolate.getLengthOfDescription();

strawberry.printInfo();
strawberry.getTotalPrice(2);
strawberry.getLengthOfDescription();

mint.printInfo();
mint.getTotalPrice(2);
strawberry.getLengthOfDescription();

// TODO Bonus Aufagbe
