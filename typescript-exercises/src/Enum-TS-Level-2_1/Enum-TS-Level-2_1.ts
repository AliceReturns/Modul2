console.clear();

enum HtmlError {
  OK = "200",
  Redirect = "300",
  BadRequest = "400",
  InternalServerError = "500",
}

function showHtmlError() {
  let randomWert: number = Math.floor(Math.random() * 5) + 1;
  if (randomWert === 0.1 || randomWert === 2) {
    return HtmlError.OK + " ist OK ";
  } else if (randomWert === 3) {
    return HtmlError.Redirect + " ist Redirect ";
  } else if (randomWert === 4) {
    return HtmlError.BadRequest + " ist BadRequest ";
  } else {
    return HtmlError.InternalServerError + " ist InternalServerError ";
  }
}

console.log("Fehlercode:", showHtmlError());
console.log("Fehlercode:", showHtmlError());
console.log("Fehlercode:", showHtmlError());
console.log("Fehlercode:", showHtmlError());
console.log("Fehlercode:", showHtmlError());
console.log("Fehlercode:", showHtmlError());
