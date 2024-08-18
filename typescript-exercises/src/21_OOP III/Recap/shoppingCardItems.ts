class ShoppingCardItems {
  _productNames: string;
  _Prices: number;
  _index: number;

  constructor(productNames: string, Prices: number, index: number) {
    this._productNames = productNames;
    this._Prices = Prices;
    this._index = index;
  }
}

export default ShoppingCardItems;
