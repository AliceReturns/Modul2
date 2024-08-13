console.clear();

//** Zuerst selektieren wir wieder alles

const form = document.getElementById("formId") as HTMLFormElement;
const button = document.getElementById("add") as HTMLButtonElement;
const input = document.getElementById("input") as HTMLInputElement;
const output = document.getElementById("output") as HTMLDivElement;

type ToDoSchema = {
  name: string;
  done: boolean;
  id: number;
};

let toDoList: ToDoSchema[] = [];

form?.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const inputValue = input.value;
  if (inputValue) {
    const toDoObj: ToDoSchema = {
      name: inputValue,
      done: false,
      id: toDoList.length + 1,
    };
    toDoList.push(toDoObj);
    input.value = "";
    showTodos();
  } else {
    console.error("Du musst was eingeben");
  }
});

function showTodos() {
    output.innerHTML = "";
    toDoList.forEach((toDo: ToDoSchema) => {

//** Checkbox */

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = toDo.done;
    checkbox?.addEventListener("change", () => {
        toDo.done = checkbox.checked;
    });
output.appendChild(checkbox);

//** Paragraph */

    const toDoElement = document.createElement("p"); as HTMLParagraphElement;
    toDoElement.innerText = toDo.name;
    output.appendChild(toDoElement);

//** Button */

    const deleteButton = document.createElement("button"); as HTMLButtonElement;
    deleteButton.textContent = "Delete";
    output.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        toDoList = toDoList.filter((el: ToDoSchema) => el.id !== toDo.id);
        showTodos();
    }

    });