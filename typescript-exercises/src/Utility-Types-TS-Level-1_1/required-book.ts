import IBook from "./book";
import BookDescription from "./book-description";

//! required: Macht alle Eigenschaften eines Typs erforderlich.

type RequiredBook = Required<IBook>;

const requiredBook: BookDescription = {
  name: "Der Graf von Monte Cristo",
  shortDescription:
    "Ein Abenteuerroman von Alexandre Dumas über Rache und Erlösung.",
};
