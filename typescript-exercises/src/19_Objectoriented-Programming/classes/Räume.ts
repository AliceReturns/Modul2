export enum RaumArten {
  Schlafzimmer = "Schlafzimmer",
  Wohnzimmer = "Wohnzimmer",
  Küche = "Küche",
  Bad = "Bad",
  Flur = "Flur",
  Balkon = "Balkon",
  Terrasse = "Terrasse",
  Garten = "Garten",
  Garage = "Garage",
}

class Raeume {
  _raumAnzahl: number;
  _raumArt: RaumArten[];

  constructor(raumAnzahl: number, raumArt: RaumArten[]) {
    this._raumAnzahl = raumAnzahl;
    this._raumArt = raumArt;
  }
}

export default Raeume;
