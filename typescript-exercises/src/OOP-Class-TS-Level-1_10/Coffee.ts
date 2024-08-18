import Beverage from "./Beverage";

// enum muss extra exportiert werden, damit es in app.ts importiert werden kann

export enum CoffeeType {
  Espresso,
  Latte,
  Cappuccino,
  Americano,
}

class Coffee extends Beverage {
  _type: CoffeeType[];

  constructor(name: string, price: number, type: CoffeeType[]) {
    super(name, price);
    this._type = type;
  }
}

export default Coffee;
