import Person from "./OOP-Class-TS-Level-2_1";

class SchoolClass {
  id: number;
  name: string;
  endDate?: Date;
  _mitglieder: Person[];
  display: any;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this._mitglieder = [];
    console.log("School class creation successful");
  }

  displayPerson(): void {
    console.log(`Class ID: ${this.id}, Name: ${this.name}`);
  }

  // Methode zum Hinzufügen einer Person zur Klasse
  addPerson(person: Person): void {
    this._mitglieder.push(person);
    console.log(
      `Person ${person._firstName} ${person._lastName} added to class ${this.name}.`
    );
  }

  // Methode zur Ausgabe aller Personen in der Klasse
  listPersons(): void {
    console.log(`Persons in class ${this.name}:`);
    if (this._mitglieder.length > 0) {
      this._mitglieder.forEach((person) => person.displayPerson());
    } else {
      console.log("No persons in this class.");
    }
  }
}

const class1 = new SchoolClass(165, "Class 1");

const class2 = new SchoolClass(293, "Class 2");

const class3 = new SchoolClass(323, "Class 3");

class1.name = "MathClass";
class1.displayPerson();

class2.name = "ScienceClass";
class2.displayPerson();

class3.name = "EnglishClass";
class3.displayPerson();

export default SchoolClass;
