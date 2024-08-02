console.clear();

enum PizzaSize {
  Small,
  Medium,
  Large,
  Familie,
}

enum PizzaIngredients {
  Cheese,
  Onion,
  Salami,
  Ham,
  Pineapple,
  Mushrooms,
  Peppers,
}

type Pizza = { size: PizzaSize; ingredients: PizzaIngredients[] };

const pizzaSalami: Pizza = {
  size: PizzaSize.Small,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Salami],
};

const pizzaFunghi: Pizza = {
  size: PizzaSize.Familie,
  ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Salami],
};

const pizzaMagherita: Pizza = {
  size: PizzaSize.Large,
  ingredients: [PizzaIngredients.Cheese],
};

const pizzaHawaii: Pizza = {
  size: PizzaSize.Medium,
  ingredients: [
    PizzaIngredients.Cheese,
    PizzaIngredients.Ham,
    PizzaIngredients.Pineapple,
  ],
};
