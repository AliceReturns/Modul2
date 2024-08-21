console.clear();

// ! IMPORT

import OrderStatus from "./Interfaces/OrderStatus";
import Pizza from "./classes/pizza";
import Order from "./classes/order";

// ! SELECTING DOM ELEMENTS

const customerNameInput = document.querySelector(
  "customer-name"
) as HTMLInputElement;

const pizzaSelect = document.querySelector("pizza-select") as HTMLSelectElement;
const orderButton = document.querySelector("order-button") as HTMLButtonElement;
const cancelButton = document.querySelector(
  "cancel-button"
) as HTMLButtonElement;

orderButton?.addEventListener("click", (event: Event) => {
  event.preventDefault();
  if (customerNameInput && pizzaSelect)
    const customerName = customerNameInput.value.trim();
  const pizzaName = pizzaSelect.value;
  console.log(customerName);
  console.log(pizzaName);}

  
});
