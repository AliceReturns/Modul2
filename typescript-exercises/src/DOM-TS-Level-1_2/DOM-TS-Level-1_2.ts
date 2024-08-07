console.clear();

//** Möglichket mit textContent & appendChild */

// const info = document.getElementById("info") as HTMLDivElement;

// const helloWorld = document.createElement("h1");
// helloWorld.textContent = "Hello, World!";
// info.appendChild(helloWorld);

// const howAreYou = document.createElement("h2");
// howAreYou.textContent = "How are you?";
// info.appendChild(howAreYou);

//** Möglichket mit innerHTML */

const elementWithInnerHTML = document.getElementById("info") as HTMLDivElement;

elementWithInnerHTML.innerHTML += "<h1>Hello, World!</h1>";
elementWithInnerHTML.innerHTML += "<h2>How are you?</h2>";

const newDivElement = document.createElement("div") as HTMLDivElement;
newDivElement.setAttribute("id", "container");

elementWithInnerHTML.appendChild(newDivElement);

const newContainer = document.getElementById("container") as HTMLDivElement;

newContainer.innerHTML += "<p>This is a paragraph</p>";
newContainer.innerHTML += "<input></input>";

const input = document.querySelector("input") as HTMLInputElement;
input.setAttribute("type", "text");

// console.log(input);
