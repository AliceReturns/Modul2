console.clear();

class Owner {
  _name: string;
  _adress: string;
  _postalCode: string;
  _city: string;
  _birthday?: Date;

  constructor(name: string, adress: string, postalCode: string, city: string) {
    //? die Parameter werden in die Eigenschaften des Objekts gespeichert

    this._name = name;
    this._adress = adress;
    this._postalCode = postalCode;
    this._city = city;
  }
}

export default Owner;
