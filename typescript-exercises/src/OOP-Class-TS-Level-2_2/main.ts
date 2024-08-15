class Car {
  _brand: string;
  _constructionYear: Date;
  _currentSpeed: number;

  constructor(brand: string, constructionYear: Date, currentSpeed: number) {
    this._brand = brand;
    this._constructionYear = constructionYear;
    this._currentSpeed = 0;
  }
}

class Driver {
  _firstName: string;
  _lastName: string;
  _age: number;
  _car: Car;

  constructor(firstName: string, lastName: string, age: number, car: Car) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._car = car;
  }
}

export default { Car, Driver };
