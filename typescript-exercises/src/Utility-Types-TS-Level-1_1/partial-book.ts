import IBook from "./book";

type PartialBook = Partial<IBook>;

const partialBook: PartialBook = {
  author: "John Doe",
  name: "The Book",
};

export default partialBook;
