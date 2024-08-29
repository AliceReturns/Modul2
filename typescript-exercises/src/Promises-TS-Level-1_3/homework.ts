console.clear();

const paragraph = document.getElementById("Text") as HTMLDivElement;

let promise1 = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Exercise 1 done.");
  }, 20000);
});

let promise2 = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Exercise 2 done.");
  }, 30000);
});

let promise3 = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Exercise 3 done.");
  }, 40000);
});

if (paragraph) {
  paragraph.textContent = "Starting...";
}

promise1.then((message) => {
  if (paragraph) {
    paragraph.textContent = message;
  }
});

promise2.then((message) => {
  if (paragraph) {
    paragraph.textContent += " " + message;
  }
});

promise3.then((message) => {
  if (paragraph) {
    paragraph.textContent += " " + message;
  }
});
