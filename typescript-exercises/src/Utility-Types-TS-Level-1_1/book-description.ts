import IBook from "./book";

//! Erlaubt es, bestimmte Eigenschaften aus einem Typ auszuwählen.

type BookDescription = Pick<IBook, "name" | "shortDescription">;

const bookDescription: BookDescription = {
  name: "Es",
  shortDescription: "Ein Clown tötet Kinder",
};

export default BookDescription;
