console.clear();

const inputElement = document.getElementById("Inputfeld") as HTMLInputElement;
const buttonElement = document.getElementById("button") as HTMLButtonElement;
const outputElement = document.getElementById("output") as HTMLDivElement;

buttonElement.addEventListener("click", (event) => {
  event.preventDefault();

  const inputValue = inputElement.value.trim(); // Eingabe aus dem Textfeld lesen und führende/anhängende Leerzeichen entfernen
  if (inputValue !== "") {
    const timestamp = new Date().toLocaleString(); // Aktuellen Zeitstempel formatieren

    // Text und Zeitstempel im HTML-Dokument anzeigen
    const message = `${inputValue} - ${timestamp}`;
    outputElement.innerHTML += `<p>${message}</p>`;
  }
});
