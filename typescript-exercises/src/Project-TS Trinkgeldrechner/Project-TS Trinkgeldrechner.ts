console.clear();

document.getElementById("Trinkgeldrechner")!.style.backgroundColor = "pink";
document.getElementById("Trinkgeldrechner")!.style.textAlign = "left";
document.getElementById("Trinkgeldrechner")!.style.paddingLeft = "6em";
document.getElementById("Trinkgeldrechner")!.style.marginLeft = "15rem";
document.getElementById("Trinkgeldrechner")!.style.marginRight = "15rem";
document.getElementById("Trinkgeldrechner")!.style.paddingTop = "1rem";
document.getElementById("Trinkgeldrechner")!.style.paddingBottom = "2rem";

const eingabe1 = document.getElementById("InputOne");
const eingabe2 = document.getElementById("InputTwo");
const bewertung = document.getElementById("Selection");
const button = document.getElementById("Button");

function calculaterTwo(
  essensbetrag: number,
  personenanzahl: number,
  service: string
): number {
  let prozente: number;

  if (service === "schlecht") {
    prozente = 0.02;
  } else if (service === "mittel") {
    prozente = 0.1;
  } else if (service === "gut") {
    prozente = 0.2;
  } else {
    ("Bitte geben Sie eine Bewertung ein");
  }

  const preisProPerson = essensbetrag / personenanzahl;
  return preisProPerson;
  const trinkgeldProPerson = (essensbetrag / personenanzahl) * prozente;
  return trinkgeldProPerson;
}

console.log(calculaterTwo(100, 5, "gut"));
