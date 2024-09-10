console.clear();

//! Erstellt ein Objekt-Typ, bei dem die Schlüssel (K) mit bestimmten Typen (T) verbunden sind.

interface IDonkey {
  name: string;
  age: number;
  fluffyness: number;
  favoriteFood: string;
}

enum Donkey {
  Daisy = "Daisy",
  Gus = "Gus",
  Rosie = "Rosie",
  Coco = "Coco",
  Jasper = "Jasper",
}

const donkeyRecord: Record<Donkey, IDonkey> = {
  [Donkey.Daisy]: {
    name: Donkey.Daisy,
    age: 5,
    fluffyness: 3,
    favoriteFood: "carrots",
  },
  [Donkey.Gus]: {
    name: Donkey.Gus,
    age: 8,
    fluffyness: 5,
    favoriteFood: "apples",
  },
  [Donkey.Rosie]: {
    name: Donkey.Rosie,
    age: 3,
    fluffyness: 4,
    favoriteFood: "bananas",
  },
  [Donkey.Coco]: {
    name: Donkey.Coco,
    age: 10,
    fluffyness: 2,
    favoriteFood: "grapes",
  },
  [Donkey.Jasper]: {
    name: Donkey.Jasper,
    age: 7,
    fluffyness: 1,
    favoriteFood: "strawberries",
  },
};

console.log(donkeyRecord);
console.log(donkeyRecord.Coco);
