console.clear();

//! Exclude => entfernt bestimmte Typen aus einem Union-Typ

type BasicColors = "RED" | "BLUE" | "GREEN" | "YELLOW" | "BLACK" | "WHITE";

type RealColors = Exclude<BasicColors, "RED" | "BLUE" | "GREEN" | "YELLOW">;

function showColor(color: RealColors): void {
  console.log(color);
}

showColor("BLACK");
showColor("WHITE");

//? wurden entfernt und können daher nicht mehr verwendet werden

// showColor("RED"); // Error
// showColor("BLUE"); // Error
