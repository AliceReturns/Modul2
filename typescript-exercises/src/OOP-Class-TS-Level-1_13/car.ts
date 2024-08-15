import CarType from "./cartype";

class Car {
  _brand: string;
  private _constructionYear: number;
  _currentSpeed: number;
  _carType: CarType;

  constructor(
    brand: string,
    constructionYear: number,
    currentSpeed: number,
    carType: CarType
  ) {
    this._brand = brand;
    this._constructionYear = constructionYear;
    this._currentSpeed = currentSpeed;
    this._carType = carType;
  }

  get constructionYear(): number {
    return this._constructionYear;
  }

  getSpeedInfo() {
    if (this._currentSpeed <= 40) {
      console.log("Car is driving very slow");
    } else if (this._currentSpeed > 40 && this._currentSpeed <= 70) {
      console.log("Car is driving at average speed");
    } else if (this._currentSpeed > 70 && this._currentSpeed <= 120) {
      console.log("Car is driving very fast");
    } else if (this._currentSpeed > 120 && this._currentSpeed <= 190) {
      console.log("Car is driving extremely fast");
    } else {
      console.log("WTF");
    }
  }

  getCarType() {
    if (this._carType == CarType.SEDAN) {
      console.log("Car type is Sedan");
    } else if (this._carType == CarType.SUV) {
      console.log("Car type is SUV");
    } else if (this._carType == CarType.HATCHBACK) {
      console.log("Car type is Hatchback");
    } else if (this._carType == CarType.CONVERTIBLE) {
      console.log("Car type is Convertible");
    } else if (this._carType == CarType.TRUCK) {
      console.log("Car type is Truck");
    } else if (this._carType == CarType.COUPE) {
      console.log("Car type is Coupe");
    } else {
      console.log("Car type is Unknown");
    }
  }
}

export default Car;
