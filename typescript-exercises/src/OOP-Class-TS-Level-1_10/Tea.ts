import Coffee, { CoffeeType } from "./Coffee";

export enum TeaFlavor {
  Green,
  Black,
  Chai,
  Peppermint,
}

class Tea extends Coffee {
  _flavor: TeaFlavor[];

  constructor(
    name: string,
    price: number,
    type: CoffeeType[],
    flavor: TeaFlavor[]
  ) {
    super(name, price, type);
    this._flavor = flavor;
  }
}

export default Tea;
