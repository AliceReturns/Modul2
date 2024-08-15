import Car from "./car";

class Driver {
  _firstName: string;
  _lastName: string;
  _age: number;
  _car: Car;
  private _licenseFromYear: number = 2024;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    car: Car,
    license: number
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._car = car;
    this._licenseFromYear = license;
  }

  get licenseFromYear(): number {
    return this._licenseFromYear;
  }
}

export default Driver;
