console.clear();

class IceCreamFlavor {
  _name: string;
  _price: number;
  _isPopular: boolean;
  _description?: string;

  constructor(
    name: string = "",
    price: number = 0,
    isPopular: boolean = false,
    description?: string
  ) {
    this._name = name;
    this._price = price;
    this._isPopular = isPopular;
    this._description = description;
  }

  flavorDetails() {
    console.log(
      `The Ice Cream Flavor is : ${this._name}, It costs: ${this._price} $, It's Popularity is: ${this._isPopular}, The Description of the flavor is: ${this._description}`
    );
  }
}

const vanilla = new IceCreamFlavor("Vanilla", 10, true, "Vanilla Flavor");
vanilla.flavorDetails();

const chocolate = new IceCreamFlavor(
  "Chocolate",
  15,
  false,
  "Chocolate Flavor"
);
chocolate.flavorDetails();

const strawberry = new IceCreamFlavor(
  "Strawberry",
  20,
  true,
  "Strawberry Flavor"
);
strawberry.flavorDetails();

const butterscotch = new IceCreamFlavor(
  "Butterscotch",
  25,
  false,
  "Butterscotch Flavor"
);
butterscotch.flavorDetails();

const iceCreamFlavors: IceCreamFlavor[] = [
  vanilla,
  chocolate,
  strawberry,
  butterscotch,
];

iceCreamFlavors.forEach((flavor) => flavor.flavorDetails());

console.log(iceCreamFlavors.map((flavor) => flavor._name));
