function addTwenty(zahl) {
  const result = zahl + 20;
  console.log(result);
}

// in JS wird hier jedes Argument ausgegebne, egal ob zahl string oder etwas anderes. Es akzeptiert alles. TS hinterfragt die Richtigkeit.

addTwenty(10);
addTwenty(100);
addTwenty(false);
addTwenty("Guten Morgen");
