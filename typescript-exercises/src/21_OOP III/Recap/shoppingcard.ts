import ShoppingCardItems from "./shoppingCardItems";

class Shoppingcard {
  private _shoppingItems: ShoppingCardItems[] = [];
  private _totalPrice: number = 0;
  //? An dieser Stelle brauchen wir keinen constructer mehr weil beide Properties bereits initialisiert wurden

  get items(): ShoppingCardItems[] {
    return this._shoppingItems;
  }

  set items(value: ShoppingCardItems[]) {
    this._shoppingItems = value;
  }

  addItem(item: ShoppingCardItems): void {
    this._shoppingItems.push(item);
    this._totalPrice += item.price;
  }

  private calculateTotalPrice(): number {
    return this._totalPrice;
  }
}

const shopping1 = new Shoppingcard();

const products: string[] = ["Cola", "IceCream", "Pizza"];
const prices: number[] = [1.99, 2.69, 3.99];

const datenBank = new Map<string, number>();
datenBank.set("Cola", 1.99);
datenBank.set("IceCream", 2.69);

products.forEach((product, index) => {
  datenBank.set(product, prices[index]);
});

let index = 0;

datenBank.forEach((value, key) => {
  const _shoppingItem = new ShoppingCardItems(key, value, index);
  index++;
  console.log(_shoppingItem);
  shopping1.addItem(_shoppingItem);
});

export default Shoppingcard;
