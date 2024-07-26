let album: string[] = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

console.log(album);

let dateiEndung: string[] = album.map((file) => {
  // Überprüfen, ob der Dateiname einen Punkt enthält
  if (file.includes(".")) {
    // Den Dateinamen anhand des Punktes in Teile zerlegen
    let parts = file.split(".");
    // Alle Teile außer dem letzten wieder zusammenfügen
    return parts.slice(0, -1).join(".");
  } else {
    // Wenn kein Punkt enthalten ist, den Dateinamen unverändert zurückgeben
    return (file = "invalid");
  }
});

console.log(dateiEndung);

let lowerCase: string[] = album.map((file) => file.toLowerCase());

console.log(lowerCase);
