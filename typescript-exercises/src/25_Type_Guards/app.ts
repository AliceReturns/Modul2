//* typeof => Zeigt an, was für eine Varianle es ist (string, number, boolean, object, function, undefined)
//* typeof => für primitive Datentypen (string, number, boolean, undefined)

const zahl1 = 5;
console.log(typeof zahl1); // number

const text = "Hallo";
console.log(typeof text); // string

const isMarried = false;
console.log(typeof isMarried); // boolean

console.log(typeof undefined); // undefined

console.log(typeof null); // object

const person = {
  name: "Max",
  age: 22,
};
console.log(typeof person); // object

const name = ["Max", "Moritz"];
console.log(typeof name); // object

const today = new Date();
console.log(typeof today); // object

const greetMe = () => {
  console.log("Hallo!");
};

console.log(typeof greetMe); // function

//! Abfrage => typeof : Was für ein type ist es?

// const resultVomApi: any {}

// if (typeof resultVomApi === "string") {
//   console.log("resultVomApi ist ein String");
// } else if (typeof resultVomApi === "number") {
//   console.log("resultVomApi ist eine Zahl");
// } else if (typeof resultVomApi === "object") {
//   console.log("resultVomApi ist ein Objekt");
// }
