import IBook from "../book";
import partialBook from "../partial-book";

//! Partial macht alle Typen optional (nicht notwendig)

interface IPartialBook extends Partial<IBook> {}

const partialBook2: IPartialBook = {
  name: "The Hobbit",
};
