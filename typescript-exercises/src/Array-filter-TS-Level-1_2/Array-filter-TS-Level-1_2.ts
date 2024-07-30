console.clear();

const heroArr: (string | null | undefined)[] = [
  "Superman",
  "Batman",
  undefined,
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  undefined,
  null,
];

function showHeroesCleaned(): void {
  // Vor der Bereinigung des Arrays
  console.log("Original Array:", heroArr);

  // Bereinigen des Arrays durch Entfernen von null und undefined
  const cleanedHeroes = heroArr.filter(
    (hero): hero is string => hero !== null && hero !== undefined
  );

  // Nach der Bereinigung des Arrays
  console.log("Cleaned Array:", cleanedHeroes);
}

// Aufruf der Funktion
showHeroesCleaned();
