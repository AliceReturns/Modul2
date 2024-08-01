console.clear();

type Pet = {
  tiertyp: string;
  namen: string[];
};

let unsereHaustiere: Pet[] = [
  {
    tiertyp: "Katze",
    namen: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    namen: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

// Greife auf die Werte "Nala" und "Droopy" in diesem Array von Objekten zu und lasse sie dir auf der Konsole ausgeben.

let nala = unsereHaustiere[0].namen[1];
let droopy = unsereHaustiere[1].namen[2];

console.log(nala);
console.log(droopy);

// Lasse dir einmal alle Hundenamen anzeigen.

for (let pet of unsereHaustiere) {
  if (pet.tiertyp === "Hunde") {
    console.log("Hundenamen:");
    for (let name of pet.namen) {
      console.log(name);
    }
  }
}

// - Ändere folgende Werte: - Droopy in Snoppy - Dinky in Pinky

unsereHaustiere[1].namen[2] = "Snoppy";
unsereHaustiere[0].namen[2] = "Pinky";

console.log(unsereHaustiere[0].namen);
console.log(unsereHaustiere[1].namen);

// Erstelle ein weiteres Objekt vom Typ Pet, z. B. Hamster

let hamster: Pet = {
  tiertyp: "Hamster",
  namen: ["Hanni", "Nanni", "Nunni"],
};

// Füge dieses Objekt dem Array unsereHaustiere hinzu.

unsereHaustiere.push(hamster);
console.log(unsereHaustiere);
