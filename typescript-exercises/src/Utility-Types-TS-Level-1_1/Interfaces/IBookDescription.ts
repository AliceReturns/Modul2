import IBook from "../book";

interface IBookDescription extends Pick<IBook, "name" | "shortDescription"> {}

const bookDescription2: IBookDescription = {
  name: "Es",
  shortDescription: "Ein Clown tötet Kinder",
};
