console.clear();

import Car from "./car";
import Driver from "./driver";
import CarType from "./cartype";

const car1 = new Car("Sedan", 2010, 50, CarType.SEDAN);
const driver1 = new Driver("John", "Doe", 30, car1, 2020);
console.log(car1);
car1.getSpeedInfo();
console.log(driver1);
car1.getCarType();

const car2 = new Car("SUV", 2015, 200, CarType.SUV);
const driver2 = new Driver("Jane", "Doe", 25, car2, 2022);
console.log(car2);
car2.getSpeedInfo();
console.log(driver2);
car2.getCarType();

const car3 = new Car("TRUCK", 2020, 60, CarType.TRUCK);
const driver3 = new Driver("Tom", "Smith", 35, car3, 2024);
console.log(car3);
car3.getSpeedInfo();
console.log(driver3);
car3.getCarType();

const car4 = new Car("COUPE", 2018, 120, CarType.COUPE);
const driver4 = new Driver("Alice", "Smith", 28, car4, 2023);
console.log(car4);
car4.getSpeedInfo();
console.log(driver4);
car4.getCarType();
