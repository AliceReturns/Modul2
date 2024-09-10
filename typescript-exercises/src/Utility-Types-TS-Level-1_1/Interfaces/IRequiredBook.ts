import IBook from "../book";

interface IRequiredBook extends Required<IBook> {}

const requiredBook2: IRequiredBook = {
  name: "Der Graf von Monte Cristo",
  shortDescription:
    "Ein Abenteuerroman von Alexandre Dumas über Rache und Erlösung.",
  author: "Alexandre Dumas",
  publishingYear: "1844",
  numberOfPages: 1276,
};
