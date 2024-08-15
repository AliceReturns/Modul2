class IceCreamFlavor {
  _name: string = "";
  _price: number = 0;
  _isPopular: boolean = false;
  _description?: string = undefined;

  constructor(name: string, price: number, isPopular: boolean) {
    this._name = name;
    this._price = price;
    this._isPopular = isPopular;
  }

  getTotalPrice(numberOfScoops: number) {
    return this._price * numberOfScoops;
  }

  printInfo() {
    console.log(
      `The name ist: ${this._name} It costs: ${this._price} and it's popularity is : ${this._isPopular}`
    );
  }

  getLengthOfDescription() {
    if (this._description) {
      return this._description.length;
    } else {
      return 0;
    }
  }
}

export default IceCreamFlavor;
