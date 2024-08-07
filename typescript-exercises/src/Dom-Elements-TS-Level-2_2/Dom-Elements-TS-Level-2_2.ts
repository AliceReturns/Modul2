// console.clear();

// const form = document.querySelector("#form1") as HTMLFormElement;
// const vornameInput = document.querySelector("#vorname") as HTMLInputElement;
// const nachnameInput = document.querySelector("#nachname") as HTMLInputElement;
// const selectLand = document.querySelector("#land") as HTMLSelectElement;
// const submitButton = document.querySelector("#submit") as HTMLButtonElement;

// submitButton.addEventListener("click", (event: MouseEvent) => {
//   event.preventDefault();
//   console.log(vornameInput.value);
//   console.log(nachnameInput.value);
//   console.log(selectLand.value);

//   // Leeren der Eingabefelder nach dem Absenden
//   vornameInput.value = "";
//   nachnameInput.value = "";
//   selectLand.selectedIndex = 0; // Setzt das Dropdown-Menü auf die erste Option zurück
// });

type SimplePerson = {
  firstName: string;
  lastName: string;
  country: string;
};

const form = document.querySelector("#form1") as HTMLFormElement;
const vornameInput = document.querySelector("#vorname") as HTMLInputElement;
const nachnameInput = document.querySelector("#nachname") as HTMLInputElement;
const selectLand = document.querySelector("#land") as HTMLSelectElement;
const submitButton = document.querySelector("#submit") as HTMLButtonElement;

submitButton.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();

  // Erstellen eines SimplePerson-Objekts mit den Werten aus dem Formular
  const person: SimplePerson = {
    firstName: vornameInput.value,
    lastName: nachnameInput.value,
    country: selectLand.value,
  };

  console.log(person);

  // Leeren der Eingabefelder nach dem Absenden
  vornameInput.value = "";
  nachnameInput.value = "";
  selectLand.selectedIndex = 0;
});
