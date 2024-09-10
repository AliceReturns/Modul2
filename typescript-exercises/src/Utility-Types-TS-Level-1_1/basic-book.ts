import IBook from "./book";

//! Omit => entfernt bestimmte Eigenschaften aus einem Typ.

type BasicBook = Omit<IBook, "publishingYear" | "shortDescription">;

const basicBook: BasicBook = {
  author: "J.R.R. Tolkien",
  name: "The Hobbit",
  numberOfPages: 310,
};
