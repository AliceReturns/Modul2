import IEmployee from "./Contracts/employee";

class Trainee implements IEmployee {
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

  get assignedEmployeesList(): IEmployee[] {
    return this.assignedEmployees;
  }
}
export default Trainee;
