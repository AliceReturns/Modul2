// **  Erstmal alles seleketieren

const formElement = document.getElementById("form_todo") as HTMLFormElement;

const inputElement = document.getElementById("input_todo") as HTMLInputElement;

const outPut = document.getElementById("output") as HTMLDivElement;

// ********************************

type TodoSchema = {
  todoName: string;
  done: boolean;
  id: number;
};

let todoList: TodoSchema[] = [];

// ********************************

formElement?.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const inputValue = inputElement.value;
  if (inputValue) {
    const todoObj: TodoSchema = {
      todoName: inputValue,
      done: false,
      id: todoList.length,
    };
    todoList.push(todoObj);
    console.log(todoList);
    inputElement.value = "";
    showTodos();
  } else {
    console.error("Du musst was eingeben");
  }
});

function showTodos() {
  outPut.innerHTML = "";
  todoList.forEach((todo: TodoSchema) => {
    // ! checkbox
    const checkBoxElement = document.createElement("input") as HTMLInputElement;
    checkBoxElement.type = "checkbox";
    checkBoxElement.checked = todo.done;
    checkBoxElement?.addEventListener("change", () => {
      todo.done = checkBoxElement.checked;
      if (todo.done) {
        todoElement.style.textDecoration = "line-through";
      } else {
        todoElement.style.textDecoration = "none";
      }
    });
    outPut.appendChild(checkBoxElement);

    // ! paragraph
    const todoElement = document.createElement("p") as HTMLParagraphElement;
    todoElement.innerText = todo.todoName;
    if (todo.done) {
      todoElement.style.textDecoration = "line-through";
    }
    outPut.appendChild(todoElement);

    // ! delete Button

    const deleteBtn = document.createElement("button") as HTMLButtonElement;
    deleteBtn.textContent = "❌";

    deleteBtn.addEventListener("click", () => {
      if (todo.done) {
        todoList = todoList.filter((el: TodoSchema) => el.id !== todo.id);
        showTodos();
      } else {
        window.alert("Du musst das erstmal erledigen");
      }
    });
    outPut.appendChild(deleteBtn);
  });
}

// const fruits: string[] = ["Kiwi", "Banana", "Apfel", "Kiwi"]
// const fruitsEmoji = fruits.map((fruit: string) => {
//     if (fruit === "Kiwi") {
//         return "🥝"
//     }
// }).filter((el) => el !== undefined)
// console.log(fruitsEmoji);
