console.log("Hallo");

let firstName: string = "Victoria";
let lastName: string = "Glass";
let fullName: string = firstName + lastName;

let laengeVorname: number = firstName.length;
let laengeNachname: number = lastName.length;
let laengefullName: number = firstName.length + lastName.length;

console.log("Dein Vorname besteht aus " + laengeVorname + " Zeichen");
console.log("Dein Nachname besteht aus " + laengeNachname + " Zeichen");
console.log(
  "Dein Vor- und Nachname bestehen zusammen aus " + laengefullName + " Zeichen"
);
