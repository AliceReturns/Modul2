import car from "./main.ts";
import driver from "./main.ts";

const car1 = new car.Car("BMW", new Date("2020-01-01"), 0);
const driver1 = new driver.Driver("John", "Doe", 30, car1);

console.log(car1._brand + " " + driver1._car._brand);

const car2 = new car.Car("Audi", new Date("2019-01-01"), 0);
const driver2 = new driver.Driver("Jane", "Smith", 25, car2);

const car3 = new car.Car("Mercedes", new Date("2018-01-01"), 0);
const driver3 = new driver.Driver("Alice", "Johnson", 35, car3);

// TODO: Implement the following classes and interfaces:
