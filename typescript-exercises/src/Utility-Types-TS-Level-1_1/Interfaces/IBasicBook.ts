import IBook from "../book";

interface IBasicBook
  extends Omit<IBook, "publishingYear" | "shortDescription"> {}

const basicBook2: IBasicBook = {
  name: "The Hobbit",
  author: "J.R.R. Tolkien",
  numberOfPages: 310,
};
