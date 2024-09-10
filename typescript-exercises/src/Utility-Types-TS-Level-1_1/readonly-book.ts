import IBook from "./book";

//! readonly: Erlaubt es, die Eigenschaften eines Typs als schreibgeschützt zu markieren.

type ReadOnlyBook = Readonly<IBook>;

const readonlyBook: ReadOnlyBook = {
  name: "Es",
  author: "Stephen King",
  shortDescription: "Ein Clown tötet Kinder",
  publishingYear: "1986",
  numberOfPages: 1138,
};

//readonlyBook.name = "Es 2"; // Error: Kann 'name' nicht zugewiesen werden, da es sich um eine schreibgeschützte Eigenschaft handelt.
//readonlyBook.numberOfPages = 1139; // Error: Zuweisung an 'numberOfPages' nicht möglich, da es sich um eine schreibgeschützte Eigenschaft handelt.
