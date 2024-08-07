console.clear();

const shoppingList: string[] = [];

function addShoppingItem(item: string): void {
  shoppingList.push(item);
}

function removeShoppingItem(item: string): void {
  const index = shoppingList.indexOf(item);
  if (index > -1) {
    shoppingList.splice(index, 1);
  }
}

function displayShoppingList(): void {
  const list = document.getElementById("myList");
  if (list) {
    list.innerHTML = "";
    shoppingList.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }
}

const addButton = document.getElementById("button");

if (addButton) {
  addButton.addEventListener("click", () => {
    const input = document.getElementById("inputText") as HTMLInputElement;
    if (input.value) {
      addShoppingItem(input.value);
      displayShoppingList();
      input.value = "";
    }
  });
}

displayShoppingList();
