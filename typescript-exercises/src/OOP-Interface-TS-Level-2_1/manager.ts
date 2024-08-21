import Employee from "./Contracts/employee";

export class Manager implements Employee {
  _name: string;
  _age: number;
  _position: string;
  private assignedEmployees: Employee[] = [];

  constructor(name: string, age: number, position: string) {
    this._name = name;
    this._age = age;
    this._position = position;
  }

  get assignedEmployeesList(): Employee[] {
    return this.assignedEmployees;
  }
}

export default Manager;
