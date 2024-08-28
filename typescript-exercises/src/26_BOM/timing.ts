console.log("%c ==== timing events ====", "color: orange");
//! ============= Timing Events =============
//-> Timing bzw Zeitgeberfunktionen, die uns das BOM zur verfuegung stellt
//-> es gibt 2 die wir nutzen koennen

//# setTimeout
//- man kann eine Zeit definieren, nach der etwas ausgefuehrt wird

//? mache nach 2s iwas
//? 1. Parameter: die FN/ Callback, d ausgefuehrt wird
//? 2. Parameter: die Anzahl in Millisekunden, bevor etwas passieren soll
//? 2 Sek = 2000 Millisekunden

window.setTimeout(() => {
  console.log("die 2 Sek sind um");
}, 2000);

//? auch ohne window davor moeglich
// setTimeout(() => {
//   window.alert("Schauen Sie noch weiter Netflix?");
// }, 5000);

//-> alternative Schreibweise zur anonymen FN / Callback
const showError = (): void => {
  console.log("Server ist nicht verfuegbar");
};

setTimeout(showError, 3000);

//# setInterval
//-> man kann eine Zeit / ein Intervall definieren, nach der immer wieder etwas ausgefuehrt wird

//? mache ALLE 2s iwas
//? 1. Parameter: die FN/ Callback, d ausgefuehrt wird
//? 2. Parameter: die Anzahl in Millisekunden, wann der code immer wieder ausgefuehrt wird

const every2Sec = () => {
  console.log("2 sek sind vorbei");
};

//setInterval(every2Sec, 2000);

//! immer daran denken, das Interval aufzuraeumen / loeschen sonst laeuft das im Hintergrund

//# clearInterval
//-> Achtung: wir muessen das setInterval in einer Variablen speichern, dass wir es wieder loeschen koennen

//1.
const intervalToDelete = setInterval(every2Sec, 2000);

//2.
clearInterval(intervalToDelete);

//-> weiteres Bsp.: ich will alle 2 sek iwas machen und es soll aber nach 10x aufhoeren

let counter = 0;

const interval2 = setInterval(() => {
  counter++;
  if (counter <= 10) {
    console.log("Peel the Avocado");
  } else {
    clearInterval(interval2);
    console.log("Guacamole");
  }
}, 2000);

//? groessere Werte???
//? 60sek
setInterval(() => {
  console.log("Tick Tack");
}, 60 * 1000);

//# Countdown
const coundtDownElt = document.getElementById("countdown");

if (coundtDownElt) {
  coundtDownElt.style.fontSize = "4rem";
  let counter = 11;

  const interval = setInterval(() => {
    counter--;
    coundtDownElt.innerText = counter.toString();

    if (counter === 0) {
      coundtDownElt.innerText = "💥";
      clearInterval(interval);
    }
  }, 1000);
}
