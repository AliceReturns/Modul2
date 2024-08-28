interface IStudent {
  _name: string;
  _age: number;
  _grade: number;

  constructor(name: string, age: number, grade: number): void;
}

export default IStudent;
