import IEmployee from "./Contracts/employee";
import Manager from "./manager";

class Subordinate implements IEmployee {
  _name: string;
  _age: number;
  _position: string;
  _startDate: Date;
  private assignedEmployees: IEmployee[] = [];

  constructor(name: string, age: number, position: string, startDate: Date) {
    this._name = name;
    this._age = age;
    this._position = position;
    this._startDate = startDate;
  }

  addSubordinate(type: IEmployee): void {
    this.assignedEmployees.push(type);
  }
}

export default Subordinate;

// TODO Aufgabe
