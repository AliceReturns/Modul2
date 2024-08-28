console.log("%c ==== BOM ====", "color: orange");
//! ============= BOM =============
//-> das Browser Object Model ist die Schnittstelle, die vom Browser bereit gestellt wird
//-> wir koennen mit TS mit dem Browserfenster und den Browserdaten interagieren
//-> window-Object -> wir bekommen verschiedenste Infortmationen zum Browser
// => console.log(window)

//# Eigenschaften des verwendeten Bildschirmrs = window.screen
console.log("Aktuellle Bildschirmhoehe in px: ", window.screen.height);
console.log("Aktuellle Bildschirbreite in px: ", window.screen.width);

//# verfuegbare Bilschirmgroesse
console.log("verfuegbare Bildschirmhoehe in px: ", window.screen.availHeight);
console.log("verfuegbare Bildschirbreite in px: ", window.screen.availWidth);

//# Farbtiefe = 24bit oder 32bit
console.log("Farbtiefe: ", window.screen.colorDepth);

let imageUrl = "";
if (window.screen.colorDepth <= 24) {
  imageUrl = "https://example.com/lower_qual_img.jpg";
} else {
  imageUrl = "https://example.com/high_qual_img.jpg";
}

console.log("Pixeltiefe: ", window.screen.pixelDepth);

//=> ======= Browserfenster selbst ==========
//# verfuegbare innere Hoehe des aktuellen Browserfensters
console.log("Innere Hoehe des Browserfensters: ", window.innerHeight);
console.log("Innere Breite des Browserfensters: ", window.innerWidth);

//-> Eventlistener, wenn sich die Groesse des Fensters aendert
//? resize Event => Browserfenster wird vergroessert oder verkleinert
window.addEventListener("resize", () => {
  console.log(
    `Fenstergroesse wurde geandert auf ${window.innerWidth} x ${window.innerHeight}`
  );
});

//# Informationen zur aktuellen URL = window.location
console.log("Gesamte URL: ", window.location.href);
console.log("Port: ", window.location.port);

//# Verlauf der Aufrufe = window.history
console.log("Laenge der History", window.history.length);

//-> ich kann darueber auch selbst navigieren
document.getElementById("back-button")?.addEventListener("click", () => {
  window.history.back();
});

//window.history.forward()

//# Seite neu laden
document.getElementById("reload")?.addEventListener("click", () => {
  window.location.reload();
});

//# umleiten / oeffnen
document.getElementById("open")?.addEventListener("click", () => {
  window.open("https://super-code.de/", "_blank");
});

//# ich kann auch die Info bekommen, welchen Browser der User nutzt
console.log("Browserinfo: ", window.navigator.userAgent);

if (window.navigator.userAgent.includes("Chrome")) {
  console.log("Wir sind im Chrome Browser");
} else {
  console.log("Brother ewwwww");
}

//# welche Browsersprache ist eingestellt
console.log("Aktuelle Sprache des Browsers: ", window.navigator.language);

if (window.navigator.language.startsWith("de")) {
  console.log("ok lass mal alles auf deutsch machen");
}

const greetUserBasedOnLanguage = (): void => {
  const userLanguage = window.navigator.language;

  let greeting: string;

  switch (userLanguage) {
    case "de-DE":
      greeting = "Willkommen";
      break;
    case "en-US":
      greeting = "Welcome";
      break;
    case "fr-FR":
      greeting = "Bienvenue";
      break;
    default:
      greeting = "Welcome";
      break;
  }

  console.log(greeting);
};

greetUserBasedOnLanguage();

//# ist der Browser online
//boolaen
console.log("Online?: ", window.navigator.onLine);

//# Dialoge
// window.alert("Achtung")
// window.prompt("Wie alt bist du?")
// window.confirm("Bitte bestaetige!")

//# Cookies
//-> Sitzungsverwaltung
//-> Praeferenzen
//-> Tracking

if (window.navigator.cookieEnabled) {
  console.log("Cookies aktiv");
} else {
  console.log("Cookies blockiert");
}

//-> so setze ich einen Cookie
document.cookie = "username=keksmonstahh";

//$ Cookies kannst du nicht beliebig einsetzen. Du musst sicherstellen, dass der User über die Verwendung von Cookies informiert wird, z. B. durch Cookie-Banner oder Pop-Ups.
//$ User sollten die Möglichkeit haben, Cookies abzulehnen oder zu deaktivieren.

//=> .... und einiges mehr
//=> siehe https://developer.mozilla.org/en-US/docs/Web/API/Window?retiredLocale=de
