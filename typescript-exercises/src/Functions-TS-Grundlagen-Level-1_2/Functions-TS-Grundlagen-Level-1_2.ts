console.clear();

//** */ function sayHello() in HTML {

let domHello = () => {
  document.getElementById("hallo") as HTMLDivElement;
  let helloHTML = document.createElement("h1");
  helloHTML.innerText = "Hallo";
  console.log(helloHTML);

  document.body.appendChild(helloHTML);
};
domHello();

//** */ function calculater (a: number, b: number) in HTML or Console

let calculater = (a: number, b: number) => {
  document.getElementById("hallo") as HTMLDivElement;
  let calculatedNumbers = document.createElement("p");
  calculatedNumbers.innerText = `The sum of ${a} and ${b} is ${a + b}`;
  //   return a + b;
  document.body.appendChild(calculatedNumbers);
};

console.log(calculater(5, 6));

//** */ function multiplyNumbers (a: number, b: number) in HTML or Console

// let multiplyNumbers = (a: number, b: number) => {
//   return window.alert(a * b);
// };

// console.log(multiplyNumbers(5, 6));

//** */ create Object

const printObjectKeys = (obj: object): void => {
  if (typeof obj === "object" && obj !== null) {
    Object.keys(obj).forEach((key) => console.log(key));
  }
};

// Beispielverwendung:
const myObject = {
  name: "John",
  age: 30,
  city: "Berlin",
};

printObjectKeys(myObject);
// Ausgabe:
// name
// age
// city
