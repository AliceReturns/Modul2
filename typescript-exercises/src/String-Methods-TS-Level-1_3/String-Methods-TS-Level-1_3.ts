console.clear();

let oceanQuote: string =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

let searchSemikolon: number = oceanQuote.search(";");
console.log({ searchSemikolon });

let searchGreen: number = oceanQuote.search("green");
console.log({ searchGreen });

let searchBlue: number = oceanQuote.search("blue");
console.log({ searchBlue });
