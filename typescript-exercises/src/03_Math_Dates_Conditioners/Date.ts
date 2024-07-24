import { differenceInYears, format } from "date-fns";

// ** Date()

const heute = new Date();
console.log({ heute });

//** Erstes Datum ab erstelung der Methode */

const firstDate = new Date(0);
console.log({ firstDate });

// new = Art Klasse

const geburtstag = new Date("1943-02-20");
console.log({ geburtstag });

// Monate beginnen immer bei 0 mit der Zählung

const projektStartDate = new Date(2024, 2, 10, 14, 45);
console.log({ projektStartDate });

//** Formatierung zu einem Lokalen Datum

console.log("Local string Deutsch", projektStartDate.toLocaleString());
console.log("Local string GB", projektStartDate.toLocaleString("en-GB"));
console.log("Local string US", projektStartDate.toLocaleString("en-US"));
console.log(
  "Local string deutsch mit UTC",
  projektStartDate.toLocaleString("de-DE", { timeZone: "UTC" })
);

console.clear();

// ** getDay() holt sich den Tag der Woche

console.log("Project start day of the Week", projektStartDate.getDay());

// ** getMonth() holt sich den Tag der Woche => Zählung beginnt hier wieder bei 0

console.log("Project start Month", projektStartDate.getMonth());

// ** getYear() holt sich den Tag der Woche => Zählung beginnt hier wieder bei 0

console.log("Project start Year", projektStartDate.getFullYear());

// ** getTime() Anzahl der Millisekunden seit 01.01.1970

console.log("Project start date Time", heute.getTime());

projektStartDate.setHours(1);
console.log(projektStartDate);

const sagMirWieAltDuBist = differenceInYears(new Date(), geburtstag);
console.log(sagMirWieAltDuBist);

console.log(format(heute, "yyy-MM-dd"));
console.log(format(heute, "dd.MM.yyyy"));
