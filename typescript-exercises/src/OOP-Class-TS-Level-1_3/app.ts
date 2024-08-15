import Animal from "./animal";
import Person from "./person";

const dog = new Animal("Dog", 5, "Brown");
console.log(dog.species);
console.log(dog.age);
console.log(dog.color);
console.log((dog.species = "Dog"));

const cat = new Animal("Cat", 3, "White");
console.log(cat.species);
console.log(cat.age);
console.log(cat.color);
console.log((cat.age = 0));

const bird = new Animal("Bird", 2, "Blue");
console.log(bird.species);
console.log(bird.age);
console.log(bird.color);
console.log((bird.color = "Brown"));

const person = new Person("John Doe", new Date("1990-01-01"), [0]);
console.log(person._gender);
console.log((person.gender = [1]));
console.log(person._name);
console.log((person.name = "Jane Doe"));
