// wenn eine function nichts zurück gibt wird sie in Type als void bezeichnet

function addTwenty(zahl: number) {
  const result = zahl + 20;
  console.log(result);
}

// hier wird der Fehler von TS angezeigt. (false ist keine Nummer wie vorher angegeben)

// addTwenty(20);
// addTwenty(100);
// addTwenty(false);

function addThirty(zahl: number): number {
  const result: number = zahl + 30;
  return result; // return sorgt dafür, dass nur eine number zurück gegeben wird, wenn in der function eine number abgefragt wurde
}

addThirty(100);
