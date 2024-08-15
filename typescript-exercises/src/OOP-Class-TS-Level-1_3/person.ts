enum Gender {
  Male,
  Female,
}

class Person {
  _name: string;
  _birthday: Date;
  _gender: Gender[];

  constructor(name: string, birthday: Date, gender: Gender[]) {
    this._name = name;
    this._birthday = birthday;
    this._gender = gender;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value === "John Doe") {
      console.log("This is a Default Name");
    } else {
      console.log("This is a Custom Name");
    }
  }

  get gender() {
    return this._gender;
  }

  set gender(value: Gender[]) {
    if (value.includes(0)) {
      console.log("This is a Female Person");
    } else {
      console.log("This is a Male Person");
    }
  }

  get birthday() {
    return this._birthday;
  }
}

export default Person;
