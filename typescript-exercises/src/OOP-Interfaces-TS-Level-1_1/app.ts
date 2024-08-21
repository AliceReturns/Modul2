import IShape from "./contracts/ IShape";
import Circle from "./contracts/circle";

const circle = new Circle("Circle", "Red", 10);
console.log(circle.draw());

const circle2 = new Circle("Circle", "Blue", 20);
console.log(circle2.draw());

const circle3 = new Circle("Circle", "Green", 30);
console.log(circle3.draw());
