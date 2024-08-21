import IShape from "./ IShape";

class Circle implements IShape {
  _name: string;
  _color: string;
  _radius: number;
  _isRound: boolean = true;

  constructor(name: string, color: string, radius: number) {
    this._name = name;
    this._color = color;
    this._radius = radius;
  }

  public draw(): string {
    return `Drawing circle`;
  }
}

export default Circle;
