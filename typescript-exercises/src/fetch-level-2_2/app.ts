console.clear();

import { se } from "date-fns/locale";
import { IToDo } from "./Interfaces/IToDo";

const url = "https://jsonplaceholder.typicode.com/todos";

const searchInput = document.getElementById("search") as HTMLInputElement;
const searchButton = document.getElementById("searchBtn") as HTMLButtonElement;

fetch(url)
  .then((response) => response.json())
  .then((data: IToDo[]) => {
    // sortiert die Aufgaben alphabetisch nach dem Titel
    const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));

    // HTML Elemente ansprechen
    const todoContainer = document.getElementById("todo-list");
    const jsonData = document.getElementById("json-data");

    sortedData.forEach((toDo) => {
      // Erstellt ein Listenelement für jede Aufgabe
      const todoItem = document.createElement("li");
      todoItem.textContent = toDo.title;

      // Setzt die Farbe abhängig vom Status der Aufgabe
      todoItem.style.color = toDo.completed ? "green" : "red";
      todoContainer?.appendChild(todoItem);

      // Erstelt ein Div-Elementin der die Liste ausgibt
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${toDo.title}</h3>
        <p>Completed: ${toDo.completed}</p>
      `;
      jsonData?.appendChild(div);
    });
  })
  .catch((error) => console.error("Fehler:", error));
