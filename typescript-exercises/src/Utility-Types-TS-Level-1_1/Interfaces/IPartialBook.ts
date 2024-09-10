import IBook from "../book";
import partialBook from "../partial-book";

interface IPartialBook extends Partial<IBook> {}

const partialBook2: IPartialBook = {
  name: "The Hobbit",
};
