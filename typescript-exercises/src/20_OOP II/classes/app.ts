import Owner from "./Owner";
import Dog from "./Dog";

const obj = {
  name: "Max Mustermann",
  adress: "Musterstraße 1",
  postalCode: "12345",
  city: "Musterstadt",
};

console.log(obj);
console.log(obj.name);

const owner1 = new Owner(
  "Max Mustermann",
  "Musterstraße 1",
  "12345",
  "Musterstadt"
);

console.log(owner1);

const dog1 = new Dog("Bello", 5, owner1);

console.log(dog1);
console.log(dog1._name);

console.log(dog1.age);

dog1.age = 6;

dog1.sleep();

dog1.bark("Wuff");

console.log(dog1.ishungry());
