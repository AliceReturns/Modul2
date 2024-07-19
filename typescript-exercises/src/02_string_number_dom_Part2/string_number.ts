const contentElement = document.getElementById("content");
console.log(contentElement);

if (contentElement) {
  contentElement.innerHTML = "Steve sieht immer gut aus";
  contentElement.style.color = "red";
  backgroundColor = "pink";
} else {
  console.log("irgendwas ist schief gelaufen");
}

// ! querySelector

const boxElement = document.querySelector(".box");
console.log("boxElement", boxElement);

if (boxElement) {
  const paragraphVomHTML = document.querySelector(".paragraph");
  paragraphVomHTML.textContent = "Heute ist es sehr warm";
}

document.open();
document.write(
  "Alles wird überschrieben <h1> Guten Morgen </h1> <br> <p> blablabla </p>"
);
document.close();
