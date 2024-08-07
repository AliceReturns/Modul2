console.clear();

const farbAuswahl = document.getElementById(
  "farbeAuswahlen"
) as HTMLSelectElement;
const button = document.getElementById("button") as HTMLButtonElement;

button.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault(); // Verhindert das Standardverhalten des Formulars

  const changeBackgroundColor = farbAuswahl.value;
  document.body.style.backgroundColor = changeBackgroundColor;
});
