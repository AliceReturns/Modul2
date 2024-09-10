import IBook from "../book";

interface IReadOnlyBook extends Readonly<IBook> {}

const readonlyBook2: IReadOnlyBook = {
  name: "Es",
  author: "Stephen King",
  shortDescription: "Ein Clown tötet Kinder",
  publishingYear: "1986",
  numberOfPages: 1138,
};

//? Versuche neue Werte zu setzen (nicht möglich, da die Eigenschaften schreibgeschützt sind)

// readonlyBook2.author = "John Doe"; // Error: Kann 'author' nicht zugewiesen werden, da es sich um eine schreibgeschützte Eigenschaft handelt.
// readonlyBook2.name = "Es 2"; // Error: Kann 'name' nicht zugewiesen werden, da es sich um eine schreibgeschützte Eigenschaft handelt.
