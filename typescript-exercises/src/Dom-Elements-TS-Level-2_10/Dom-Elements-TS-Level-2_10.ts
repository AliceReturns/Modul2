console.clear();

const smallButton = document.getElementById("smallButton") as HTMLButtonElement;
const middleButton = document.getElementById(
  "middleButton"
) as HTMLButtonElement;
const bigButton = document.getElementById("bigButton") as HTMLButtonElement;
const textContent = document.getElementById("textEffekt") as HTMLDivElement;
const divElement = document.getElementById("element") as HTMLDivElement;

smallButton.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  textContent.style.color = "green";
  textContent.style.textDecoration = "none";
  textContent.style.textAlign = "center";
  textContent.style.border = "1px solid grey";
  textContent.style.borderRadius = "10px";
  textContent.style.fontFamily = "Arial";
  divElement.style.marginLeft = "0";
  divElement.style.marginRight = "0";
});

middleButton.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  textContent.style.color = "green";
  textContent.style.textAlign = "center";
  textContent.style.border = "5px solid grey";
  divElement.style.marginLeft = "10em";
  divElement.style.marginRight = "10em";
  textContent.style.borderRadius = "10px";
  textContent.style.fontFamily = "Arial";
});

bigButton.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  textContent.style.color = "lightgreen";
  textContent.style.textAlign = "center";
  textContent.style.border = "10px solid green";
  textContent.style.borderRadius = "10px";
  textContent.style.textShadow = "darkgreen 3px 3px";
  textContent.style.fontFamily = "Times New Roman";
});
