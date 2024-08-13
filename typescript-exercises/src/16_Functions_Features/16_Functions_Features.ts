console.clear();

//? mit welcher Art von Funktionen wir Arbeiten bleibt uns überlassen

//**  normal function */
// Function Declaration

function sayHello() {
  console.log("Hello"); // print Hello
}

sayHello(); // call function

//** Arrow Function */
// Arrow Function Declaration

let sayHelloArrow = () => {
  console.log("Hello Arrow");
};

sayHelloArrow(); // call function

//? Wo kommt die Arrow Function häufig vor ?

// => addEventListener
// = Array Methoden (map, filter, reduce, forEach, find, findIndex, some, every)
// => Promise
// => setTimeout, setInterval
// => fetch

// ************* Arrow-function ************** es braucht immer eine Variable und dann hat die selbe Elemente wie => runde Klammer für Parameter dann der Fat-Arrow (Doppelpfeil), geschweifte Klammern

const sayHelloWithArrowFunction = () => {
  console.log("Hello Everybody from Arrow function");
};

sayHelloWithArrowFunction();

// ? wo kommt die Arrow-Function häufig vor ?

// => addEventlistener, alle Arrays Methoden

// * 01

document.getElementById("something")?.addEventListener("click", () => {
  console.log("something is printed");
});

const sexAndTheCityPeople: string[] = [
  "Carrie",
  "Charlotte",
  "Miranda",
  "Samantha",
  "Mr.Big",
];

console.log(sexAndTheCityPeople);

// * 02

// ! filter

sexAndTheCityPeople.filter((people: string) => console.log(people));

// ! map => map erzeugt ein neues Array, deshalb sollte dafür ein neuer Variable deklariert werden
const sayHelloToPeople = sexAndTheCityPeople.map(
  (people: string) => `Moin Moin ${people}`
);

console.log(sayHelloToPeople);

// ! sort
sexAndTheCityPeople.sort((a: string, b: string) => a.localeCompare(b));

// ******* Optional Parameter in der Function **********

// * 01
const addNumbers = (zahl1: number, zahl2: number, zahl3?: number) => {
  if (zahl3) {
    return zahl1 + zahl2 + zahl3;
  }
  return zahl1 + zahl2;
};

console.log(addNumbers(4, 5));
console.log(addNumbers(4, 6, 8));

// * 02

function showUserGreeting(firstName: string, lastName?: string) {
  if (lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
  } else {
    console.log(`Hello ${firstName} `);
  }
}

showUserGreeting("Lucy");
showUserGreeting("Joe", "Doe");

// document.getElementById("einForm") ?? new HTMLElement()

// * 03

function addMoreNumbers(
  a: number,
  b: number,
  c?: number,
  d?: number,
  e?: number
) {
  return a + b + (c ?? 10) + (d ?? 0) + (e ?? 1);
}

console.log(addMoreNumbers(4, 5));
console.log(addMoreNumbers(4, 5, 6));

// ******** Default-Paramter in der Function ************

// * 01
function repeatHelloWorldDefault(numberOfTime: number = 5) {
  for (let index: number = 0; index < numberOfTime; index++) {
    console.log("Hello World");
  }
}

repeatHelloWorldDefault(15);
console.log("Mit Default Argument");
repeatHelloWorldDefault();

// * 02 => der Defaultwert sollte immer viele Fälle abdeckem, z.B wenn öfter NeueKunden angelegt werden, dann true oder false

function createCustomer(
  firstName: string,
  lastName: string,
  isNew: boolean = true
) {
  const customer = { firstName, lastName, isNew };
  console.log(customer);
}

createCustomer("John", "Doe");
createCustomer("Mary", "Mae", false);
createCustomer("Steve", "D.", false);

// ********* Functionen in Objecten deklarien

// * 01

const customer30 = {
  firstName: "Harry",
  lastName: "Winsi",
  age: 39,
  showInfo: function () {
    console.log("Harry winsi is 39");
  },
  showName: function () {
    console.log("firstName is Harry");
  },
};

// ! showInfo() ich kann die function nur beim Object aufrufen dafür brauch ich die runden Klammmern für den Aufruf
// showInfo()
customer30.showInfo();
customer30.showName();

// ? wir können auch eine Arrow-function im Object anlegen

// * 02
const customer31 = {
  firstName: "Megan",
  lastName: "fox",
  age: 40,
  showInfo: () => {
    console.log("Megan fox is 40");
  },
};

customer31.showInfo();

// * 03

const customer32 = {
  firstName: "Joe",
  lastName: "Doe",
  age: 50,
  // ! im this steckt das aktuele obj - ich kann auf alle internen Eigenschaften mit this. zugreifen, allerdings nur mit normale function
  // ! showInfo: () => {
  // !     console.log(`sein Vorname ist ${this.firstName} ${this.lastName} und ist ${this.age} jahre alt `);
  // ! }
  showInfo: function () {
    console.log(
      `sein Vorname ist ${this.firstName} ${this.lastName} und ist ${this.age} jahre alt `
    );
  },
};

customer32.showInfo();
customer32.age = 30;
customer32.showInfo();

// ******** function in Type deklarieren ***********

type CustomerWithFunc = {
  firstName: string;
  lastName: string;
  age: number;
  showInfo: () => void;
  calculateAge: (year: number, somethingElse: boolean) => number;
};

const customer33: CustomerWithFunc = {
  firstName: "William",
  lastName: "Boe",
  age: 44,
  showInfo: function (): void {
    console.log(this.firstName, this.lastName);
  },
  calculateAge: function (year: number): number {
    return year - (2024 - this.age);
  },
};

customer33.showInfo();
console.log(customer33.calculateAge(2024, false));
