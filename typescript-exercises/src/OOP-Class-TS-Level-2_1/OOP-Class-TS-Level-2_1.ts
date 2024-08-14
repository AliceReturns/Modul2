class Person {
  _id: number;
  _firstName: string;
  _lastName: string;
  _birthday: Date;

  constructor(id: number, firstName: string, lastName: string, birthday: Date) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthday = birthday;
    console.log("Person creation successful");
  }

  displayPerson(): void {
    console.log(
      `ID: ${this._id}, Name: ${this._firstName} ${
        this._lastName
      }, Birthday: ${this._birthday.toDateString()}`
    );
  }
}

export default Person;
