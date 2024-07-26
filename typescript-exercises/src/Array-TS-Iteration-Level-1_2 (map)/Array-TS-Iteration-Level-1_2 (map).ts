console.clear();

const drinks = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

const upperDrinks: string[] = drinks.map((drinks: string) =>
  drinks.toUpperCase()
);

//console.log(upperDrinks);

const upperDrinksReturn: string[] = drinks.map((drinks: string) => {
  return `I like ${drinks}`;
});

console.log(upperDrinksReturn);
