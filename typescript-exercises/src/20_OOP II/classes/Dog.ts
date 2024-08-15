import Owner from "./Owner.ts";

class Dog {
  _name: string = "";
  private _age: number;
  _owner: Owner;
  _breed: string | undefined = "";
  _favoriteFood: string = "";
  _numberOfMealsPerDay: number = 0;

  //* GETTER & SETTER
  //?  get => gibt den Wert der Eigenschaft zurück
  //? Beispiel get  -- Name der Eigenschaft -- () { return this._name; }
  //? in die geschweiften Klammern wird immer return this. -- Name der Eigenschaft -- geschrieben

  get age() {
    console.log("Getter is called");
    return this._age;
  }

  //? set => setzt den Wert der Eigenschaft
  //? Beispiel set -- Name der Eigenschaft -- (value: Typ) { this._name = value; }
  //? in die geschweiften Klammern wird immer this. -- Name der Eigenschaft -- = value geschrieben

  //! Version 1

  //   set age(value: number) {
  //     this._age = value;
  //   }

  //! Version 2

  set age(value: number) {
    if (value < 0 || value > 40) {
      console.log("Invalid value for dog age");
    } else {
      this._age = value;
    }
  }

  get name(): string {
    return this._name;
  }

  constructor(name: string, age: number, owner: Owner) {
    this._name = name;
    this._age = age;
    this._owner = owner;
  }

  //? Methoden

  sleep(): void {
    console.log(`${this._name} is sleeping`);
  }

  //? Methoden mit Parameter => Parameter sind Variablen, die in der Methode verwendet werden

  bark(sound: string): void {
    console.log(`${this._name} says ${sound}`);
  }

  ishungry(): string {
    if (this._numberOfMealsPerDay < 4) {
      return `${this._name} is hungry`;
    } else {
      return `${this._name} is not hungry`;
    }
  }
}

export default Dog;
