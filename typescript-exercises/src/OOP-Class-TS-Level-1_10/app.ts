import Beverage from "./Beverage";
import Coffee from "./Coffee";
import Tea from "./Tea";
import { CoffeeType } from "./Coffee";
import { TeaFlavor } from "./Tea";

// Output 1 instance of each class:

const coffee = new Coffee("Coffee", 3.5, [CoffeeType.Espresso]);
console.log(coffee);

const tea = new Tea("Tea", 2.5, [CoffeeType.Latte], [TeaFlavor.Green]);
console.log(tea);

const beverage = new Beverage("Beverage", 1.5);
console.log(beverage);

// Output 2 instances of each class:

const coffee2 = new Coffee("Coffee", 3.5, [CoffeeType.Espresso]);
console.log(coffee2);

const tea2 = new Tea("Tea", 2.5, [CoffeeType.Latte], [TeaFlavor.Green]);
console.log(tea2);

const beverage2 = new Beverage("Beverage", 1.5);
console.log(beverage2);
