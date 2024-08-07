console.clear();

const clickBtn = document.getElementById("click-button") as HTMLButtonElement;

// *** click ****

clickBtn?.addEventListener("click", () => {
  console.log("ich wurde geklickt");
});

// **** dbclick ****

const doubleBtn = document.getElementById(
  "double-click-button"
) as HTMLButtonElement;

doubleBtn?.addEventListener("dblclick", () => {
  console.log("ich wurde zweimal geklickt");
});

// **** mouseover *****

const hoverDivElement = document.getElementById("hover-div") as HTMLDivElement;

hoverDivElement?.addEventListener("mouseover", () => {
  console.log("Mouse wurde hier gehovert");
});

// ***** focus *****

const focusInput = document.getElementById("focus-input") as HTMLInputElement;

focusInput?.addEventListener("focus", () => {
  console.log("Focus ist hier passiert");
});

// ***** input *****

const typeInputElement = document.getElementById(
  "type-input"
) as HTMLInputElement;

typeInputElement?.addEventListener("input", () => {
  console.log("Es wurde hier was geschrieben");
});

// ***** keyup *****
const hacker = document.getElementById("hacker") as HTMLInputElement;

console.log(hacker);

const showPassword = document.getElementById(
  "show-password"
) as HTMLParagraphElement;

hacker?.addEventListener("keyup", (event) => {
  // console.log(event.key);
  console.log(event.code);
  if (event.code) {
    // ! v1.
    // const result = event.code.replace("Key", "")
    // console.log(result);
    // ! v2.
    const result = event.code.slice(event.code.indexOf("k"));
    console.log(result);
    showPassword.innerText += result.toLowerCase();
  }
});

// **** change mit checkbox ****

const checkboxElement = document.getElementById(
  "checkbox-change"
) as HTMLInputElement;

console.log(checkboxElement);
checkboxElement?.addEventListener("change", () => {
  console.log("checkbox wurde gehackt");
  console.log(checkboxElement.checked);
});

// ***** change mit select ****
const selectElement = document.getElementById(
  "select-input"
) as HTMLSelectElement;

// ! v1
selectElement?.addEventListener("change", (event: Event) => {
  console.log(event);
  // ? ich hole mir über event.target das ursprungs Selecet Element und wandl es direkt in einem HTMLSelectElement, damit ich spezielle die eigenschaften von dem Element wieder verwenden kann bzw. darauf zugreifen kann
  const select = event.target as HTMLSelectElement;
  console.log(select.value);
});

// ! v2
// ? nicht über event.target sondern direkt auf Element zugreifen
selectElement?.addEventListener("change", () => {
  const select = selectElement as HTMLSelectElement;
  console.log(select.value);
});

// *** sumbit ***

const submitForm = document.getElementById("submit-form") as HTMLFormElement;

submitForm?.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  console.log("Form wurde geschickt");
});
