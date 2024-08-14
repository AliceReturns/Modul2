import Besitzer from "./Besitzer";
import Raeume from "./Räume";

class Bauplan {
  //? erstmal Vorstellen was für Eigenschaften das Haus hat

  _räume: number;
  _farbe: string = "weiß";
  _tiefGarage: boolean;
  _besitzer?: Besitzer;
  _räume: Raeume;

  //? Bestätigen was für Eigenschaften das Haus hat
  //? das Keyword "constructor" wird benutzt um die Eigenschaften zu initialisieren und ist wie eine normale Funktion

  constructor(
    räume: number,
    farbe: string,
    tiefGarage: boolean,
    besitzer?: Besitzer
  ) {
    this._räume = räume;
    //this._farbe = farbe; wenn farbe oben schon bestätigt, dann wird es hier nicht noch mal benötigt
    this._tiefGarage = tiefGarage;
    this._besitzer = besitzer ?? Besitzer("undefined");
  }

  //? Methoden

  renovieren(neueFarbe: string): void {
    this._farbe = neueFarbe;
    console.log(`Das Haus wurde in ${this._farbe} gestrichen`);
  }

  tiefGaragenCheck(stellplatz: boolean): void {
    this._tiefGarage = stellplatz;
    console.log(`Tiefgarage ist verfügbar ${this._tiefGarage}`);
  }
}

export default Bauplan;
