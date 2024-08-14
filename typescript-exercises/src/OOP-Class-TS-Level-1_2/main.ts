console.clear();

class SchoolClass {
  id: number;
  name: string;
  endDate?: Date;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    console.log("School class creation successful");
  }

  display(): void {
    console.log(`Class ID: ${this.id}, Name: ${this.name}`);
  }
}

const class1 = new SchoolClass(165, "Class 1");

const class2 = new SchoolClass(293, "Class 2");

const class3 = new SchoolClass(323, "Class 3");

class1.name = "MathClass";
class1.display();

class2.name = "ScienceClass";
class2.display();

class3.name = "EnglishClass";
class3.display();
