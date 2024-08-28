class Animal {
  //   public _specialFoods: string; //? public => Zugriff von außen
  //   private _habitat: string; //? private => Zugriff nur innerhalb der Klasse
  //   _yearOfBirth?: number;
  //   constructor(public specialFoods: string, habitat: string) {
  //     this._specialFoods = specialFoods;
  //     this._habitat = habitat;
  //   }

  constructor(public name: string) {
    if (this instanceof Panda) {
      console.log("Panda");
    }
  }
}

//* instanceof => Zeigt an, ob ein Objekt von einer bestimmten Klasse erstellt wurde

class Panda extends Animal {
  constructor(name: string) {
    super(name);
  }
}

const panda = new Panda("Paul");

function moveAnimal(animal: Animal) {
  if (animal instanceof Panda) {
    console.log("Panda");
  }
}
