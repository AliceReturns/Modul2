console.log("Hello World :)");

console.log("%c Aufagbe 1_8", "background: white; color: red");

const containerEl = document.getElementById("container") ?? new HTMLElement();

let zahl: number = 0;

do {
  zahl++;
  if (zahl % 2 === 0) {
    //** += verhindert dass die Ausgabe überschrieben wird (+ fügt hinzu) */
    containerEl.innerHTML += `<p>${zahl}</p>`;
  }
} while (zahl < 20);

console.log("%c Aufagbe 2_1", "background: white; color: red");

function createImageFile() {
  const resultArray: string[] = [];
  for (let i: number = 0; i <= 100; i++) {
    let fileName: string = "";
    if (i < 10) {
      fileName = `image_00${i}.jpg`;
    } else if (i >= 100) {
      fileName = `image_0${i}.jpg`;
    } else {
      fileName = `image_${i}.jpg`;
    }
    resultArray.push(fileName);
  }
  return resultArray;
}

const resultFile = createImageFile();
console.log(resultFile);

console.log("%c Aufagbe 3_3", "background: white; color: red");

const countInput = document.getElementById("count-input") as HTMLInputElement;
const loopButton = document.getElementById("loop-button");
const loopOutput = document.getElementById("loop-output");

function handleLoopButton(event: Event) {
  event.preventDefault();
  console.log("ich wurde geklickt");
  if (countInput.value) {
    const count: number = Number(countInput.value);
    console.log(count);
    let resultString: string = "";
    for (let i: number = 0; i < count; i++) {
      resultString = resultString + "o";
    }
    if (loopOutput) {
      loopOutput.style.color = "green";
      loopOutput.textContent = "L" + resultString + "P";
    }
  }
}

loopButton?.addEventListener("click", handleLoopButton);
