console.clear();

// * Regisrierte Kunden

// ? Type Anlegen sollte immer großgeschrieben werden
type NewCustomer = {
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone?: string;
};

// ! Sobald eine Eigenschaft optional sein sollte, können wir mit ? unser type flexibel machen
const customer1: NewCustomer = {
  firstName: "Franny",
  lastName: "Salinger",
  email: "F.Sali@gmail.de",
  mobilePhone: "2784/ 69894252",
};

// console.log(customer1);

// * Kopieren von Objecten

// ! wir können genauso wie bei Array unsere Obj kopieren

// const copyCusomer1: NewCustomer = customer1
// copyCusomer1.firstName = "Danny"
// console.log("copyCustomer1 firstname", copyCusomer1.firstName);
// console.log("customer1 firstname", customer1.firstName);

// ! So funktioniert einfach nicht

// * 01. Spread Operator

const realCopyCustomer1: NewCustomer = { ...customer1 };
realCopyCustomer1.firstName = "Danny";
console.log("real copy", realCopyCustomer1.firstName);
console.log("customer", customer1.firstName);

// * 02. Object.assign() => das bekommt zwei Argumenten, das erste ist immer geschweifte Klammer, und das zweite ist das was kopiert werden muss

const copyCusomer1WithAssign: NewCustomer = Object.assign({}, customer1);
console.log(copyCusomer1WithAssign);
copyCusomer1WithAssign.firstName = "Sunny";
console.log("copy", copyCusomer1WithAssign.firstName);
console.log("customer", customer1.firstName);

const customer2: NewCustomer = {
  firstName: "Jochen",
  lastName: "Schweitzer",
  email: "J_Sch@gmail.de",
  mobilePhone: "1784/ 6764252",
};

const customerCollection: NewCustomer[] = [customer1, customer2];

customerCollection.forEach((customer: NewCustomer) => {
  if (customer.mobilePhone) {
    console.log("Es gibt eine MobilePhone", customer.mobilePhone);
  }
});

// ? Datentyp für einen Termin

type Appoitment = { title: string; date: Date; isImportant: boolean };

const footballTraining: Appoitment = {
  title: "training für U18",
  date: new Date(),
  isImportant: true,
};

const watchMovie: Appoitment = {
  title: "James Bond",
  date: new Date(),
  isImportant: false,
};

const AppoitmentArray: Appoitment[] = [footballTraining, watchMovie];

AppoitmentArray.forEach((appointment: Appoitment) => {
  console.log("title", appointment.title);
});

// ? Type im Type

type Article = { number: number; name: string; quantity: number };

type Order = {
  id: string;
  customerNumber: number;
  articles: Article[];
};

const article1: Article = {
  number: 122,
  name: "Adidas Samba",
  quantity: 1,
};

const article2: Article = {
  number: 198,
  name: "Nike Air force",
  quantity: 2,
};

const firstOrder: Order = {
  id: "Ad2324242",
  customerNumber: 546432,
  articles: [article1, article2],
};

console.log("Order Customer", firstOrder.customerNumber);
console.log("Article Name", firstOrder.articles[0].name);
console.log("Air force", firstOrder.articles[1].name);
