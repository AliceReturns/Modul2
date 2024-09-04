console.clear();

function sayHello(name: string, callback: (message: string) => void) {
  const message = `Hello, ${name}!`;
  console.log(message);
}

function greetingCallback(message: string): void {
  console.log(message);
}

sayHello("Alice", greetingCallback);
sayHello("Bob", greetingCallback);
sayHello("Charlie", greetingCallback);

const newPromise = new Promise((resolve) => {
  let sayHello = true;
  if (sayHello) {
    resolve("sayHello war erfolgreich");
  }
});

const newPromise2 = new Promise((resolve) => {
  let greetingCallback = true;
  if (greetingCallback) {
    resolve("greetingCallback war erfolgreich");
  }
});

Promise.all([newPromise, newPromise2])
  .then((values) => {
    console.log(values);
  })
  .finally(() => {
    console.log("Homework Done!");
  });
