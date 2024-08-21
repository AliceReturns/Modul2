console.clear();

class Alien {
  public _name: string;
  public _planet?: string;
  public _galaxy?: string;
  private _color: string;

  constructor(name: string, color: string) {
    this._name = name;
    this._color = color;
    this._planet = "";
    this._galaxy = "";
  }

  get color() {
    return this._color;
  }
}

export default Alien;