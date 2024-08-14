class Besitzer {
  _vorname?: string;
  _nachname: string;
  _handyNummer?: number;

  constructor(nachname: string, vorname?: string, handyNummer?: number) {
    this._vorname = vorname;
    this._nachname = nachname;
    this._handyNummer = handyNummer;
  }

  printInfo(): void {
    console.log(
      `Besitzer: ${this._vorname} ${this._nachname}, Handy Nummer: ${this._handyNummer}`
    );
  }
}

export default Besitzer;
