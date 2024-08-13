console.clear();

//** Schritt 1 Type erstellen  */

type BookSchema = {
  title: string;
  autor: string;
  pages: number;
  genre: string;
  publisher: string;
  year: number;
  id: number;
};

//*** Schritt 2 Array erstellen */

let bookList: BookSchema[] = [];

//*** Schritt 3 alle Elemente selektieren */

const bookForm = document.getElementById("book-form") as HTMLFormElement;
const titleInput = document.getElementById("title-input") as HTMLInputElement;
const authorInput = document.getElementById("author-input") as HTMLInputElement;
const genreSelect = document.getElementById(
  "genre-select"
) as HTMLSelectElement;
const yearInput = document.getElementById("year-input") as HTMLInputElement;
const pagesInput = document.getElementById("pages-input") as HTMLInputElement;

// ? Error und die Liste const bookErrorOutput = document.getElementById('error-text') as HTMLDivElement; const bookListOutput = document.getElementById('book-list');

bookForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  console.log("Form was submitted");

  const newBook = createBook();
  console.log(newBook);
});

function createBook(): BookSchema {
  const title = titleInput.value;
  const author = authorInput.value;
  const genre = genreSelect.value;
  const year = Number(yearInput.value);
  const pages = Number(pagesInput.value);
  const id = bookList.length;

  const newBook: BookSchema = {
    title: title,
    autor: author,
    genre: genre,
    year: year,
    pages: pages,
    publisher: "Self-Published",
    id: bookList.length,
  };

  bookList.push(newBook);
  console.log(bookList);
  return newBook;
}
