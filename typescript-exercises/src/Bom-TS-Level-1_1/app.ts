// console.clear();

// const showTextTimebased = (): void => {
// console.log("You will see this message after 3 seconds");
// };

// setTimeout(showTextTimebased, 3000);

//AUFAGBE 2

let counter = 12;

const interval2Sec = () => {
  counter--;

  if (counter === 11) {
    console.log("Start: Warte für 3 Sekunden");
  } else if (counter === 8) {
    console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
  } else if (counter > 0) {
    console.log(counter);
  } else if (counter === 0) {
    console.log("Endlich Feierabend !");
    counter = 12; // Zurücksetzen des Zählers, damit der Countdown neu startet
  }
};

setInterval(interval2Sec, 2000);
