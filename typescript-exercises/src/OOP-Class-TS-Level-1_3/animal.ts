console.clear();

class Animal {
  private _species: string;
  private _age: number;
  private _color: string;

  constructor(species: string, age: number, color: string) {
    this._species = species;
    this._age = age;
    this._color = color;
  }

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value === "Dog") {
      console.log("Dogs are very Loyal and live for 10-13 years");
    } else if (value === "Cat") {
      console.log("Cats are very Independent");
    } else {
      console.log("Birds are the closest to Dinosaurs");
    }
  }

  get age() {
    return this._age;
  }

  set age(value: number) {
    if (value < 1) {
      console.log("This Animal is still a Baby");
    } else {
      console.log("Animal is now an Adult");
    }
  }

  get color() {
    return this._color;
  }

  set color(value: string) {
    if (value === "Brown") {
      console.log("This is a Brown Animal");
    } else if (value === "White") {
      console.log("This is a White Animal");
    } else {
      console.log("This is a Blue Animal");
    }
  }
}

export default Animal;
