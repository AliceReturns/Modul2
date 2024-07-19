// **String Methoden und Number Methoden** //
// bei Methoden verwenden wir immer runde Klammern //

const meinStringSatz: string = "Hallo Leute, heute ist ein schöner Tag";

// ? => length => gibt uns an wie viele Zeichen in einem String bzw Text sind //

const meinSatzlength: number = meinStringSatz.length;
console.log({ meinSatzlength });

// ! ------------------------------------------------- ! //

// ? 02 => indexOf => zeigt uns an, wo ein bestimmtes Zeichen beginnt //

const indexOfZeichen_o: number = meinStringSatz.indexOf("o");
console.log({ indexOfZeichen_o });

const indexOfZeichen_l: number = meinStringSatz.indexOf("l");
console.log({ indexOfZeichen_l });

const indexOfZeichen_zweites_l: number = meinStringSatz.indexOf("l, 2");
console.log({ indexOfZeichen_zweites_l });

// ! ------------------------------------------------- ! //

// ? 03 => substring  => kopiert einen Abschnitt des Textes, basierend auf der Start- und Endposition //

const HalloVariable: string = meinStringSatz.substring(0, 5);
console.log({ HalloVariable });

const schoenerTagVariable: string = meinStringSatz.substring(27);
console.log({ schoenerTagVariable });

// ! ------------------------------------------------- ! //

// ? 04 => slice  => kopiert einen Abschnitt des Textes, basierend auf der Start- und Endposition //

const TagVariable: string = meinStringSatz.slice(35);
console.log({ TagVariable });

// ! ------------------------------------------------- ! //

// ? 05 => trim  => entfernt alle Leerzeichen //

const userEmailFromInput: string = "      joe@gmail.com     ";
console.log({ userEmailFromInput });

const userEmailOhneLeerzeichen: string = userEmailFromInput.trim();
console.log({ userEmailOhneLeerzeichen });

// ! ------------------------------------------------- ! //

// ? 06 => charAt  => liefert uns das jeweilige Zeichen zurück, dass sich in einer Zeichenkette befindet //

const gibZeichen_L_zurueck: string = meinStringSatz.charAt(6);
console.log({ gibZeichen_L_zurueck });

//           =>          0123456789
const einSong: string = "Paint it black";

const gibZeichen_b: string = einSong.charAt(9);
console.log({ gibZeichen_b });

// ! ------------------------------------------------- ! //

// ? 07 => include  => sagt uns mit true und false Bescheid, ob ein Zeichen eine Zeichenkette enthält //

const obHalloexistiert: boolean = meinStringSatz.includes("Hallo");
console.log({ obHalloexistiert });

const obTagexistiert: boolean = meinStringSatz.includes("tag");
console.log({ obTagexistiert });

const obTagGroßExistiert: boolean = meinStringSatz.includes("Tag");
console.log({ obTagGroßExistiert });

// ! ------------------------------------------------- ! //

// ? 08 => search  => sucht nach einem Muster im Text und zeigt den Startpunkt des Wortes an //

const tag: number = meinStringSatz.search("Tag");
console.log({ tag });

// ! ------------------------------------------------- ! //

// ? 09 => replace  => ersetzt einen Teil des Textes mit einem neuen string //

const abendStattHeute: string = meinStringSatz.replace("heute", "Heute Abend");
console.log({ abendStattHeute });

// ! ------------------------------------------------- ! //

// ? 10 => tolowerCase  => ändert alle Zeichen im Text zu klein Buchstaben //

const AllesInKleinBuchstaben: string = meinStringSatz.toLocaleLowerCase();
console.log({ AllesInKleinBuchstaben });

// ! ------------------------------------------------- ! //

// ? 11 => toUpperCase  => ändert alle Zeichen im Text zu groß Buchstaben //

const AllesInGroßBuchstaben: string = meinStringSatz.toLocaleUpperCase(); // Gib den Satz komplett in groß Buchtsaben aus
console.log({ AllesInGroßBuchstaben });

// ! ------------------------------------------------- ! //

// ? 12 => concat  => Verbindet zwei Texte //

const hauptSatz: string = "Ich freu mich, "; //neuer Satz
const concatSatz: string = hauptSatz.concat(meinStringSatz); // alter Satz mit dem der neue Satz verbunden werden soll
console.log({ concatSatz }); // Ausgabe von beiden Sätzen als ein neuer Satz

console.clear(); // leert die Konsole

// ! ---------------------NUMBER METHODEN---------------------------- ! //

const age: number = 20;
const einkommen: number = 105.24;

// ? 01 => toString  => wandelt eine Zahl in einen String um //

const ageToString: string = age.toString();
console.log({ ageToString });

const einkommenToString: string = einkommen.toString();
console.log({ einkommenToString });

// ! ------------------------------------------------- ! //

// ? 02 => toFixed()  => wandelt eine Zahl in einen String um mit Nachkommastelle  //

const einkommenFixed: string = einkommen.toFixed(3); // zeigt mit die 3. Stelle nach dem Komma an
console.log({ einkommenFixed });

const einkommenFixedBeispielTwo: string = einkommen.toFixed(1); // zeigt die 1. Stelle nach dem Komma an
console.log({ einkommenFixedBeispielTwo });

// ! ------------------------------------------------- ! //

// ? 03 => toPrecision  => wandelt eine Zahl in einen String um, jedoch nicht wie toFixed(). Beginnt driekt an Position 0  //

const einkommenToPrecision = einkommen.toPrecision(3);
console.log({ einkommenToPrecision });

// ! ------------------------------------------------- ! //

// ? 04 => parseInt  => wandelt einen String in eine Ganzzahl um  //

const birthday: string = "1990";
const tax: string = "17.55";
console.log({ birthday });

const birthdayAsNumber: string = parseInt(birthday); // wandelt String in eine Nummer um
console.log({ birthdayAsNumber }); // Ausgabe in Nummer

const taxtoNumber: number = parseInt(tax); // reduziert auf eine ganze Zahl
console.log({ taxtoNumber }); //Ausgabe ganze Zahl in Nummer

// ! ------------------------------------------------- ! //

// ? 05 => Number  => konvertiert GanzZahl und Kommazahlen  //

const highNumberAsString = "732652282882852.3333";
const highNumber: number = Number(highNumberAsString);
console.log({ highNumber });
