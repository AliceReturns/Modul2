import Person from "./OOP-Class-TS-Level-2_1";
import SchoolClass from "./SchoolClass";

const mathClass = new SchoolClass(101, "Mathematics");

// Erstellen von mehreren Personen
const person1 = new Person(1, "John", "Doe", new Date(2005, 4, 15));
const person2 = new Person(2, "Jane", "Smith", new Date(2004, 9, 22));
const person3 = new Person(3, "Alice", "Johnson", new Date(2005, 11, 3));
const person4 = new Person(4, "Bob", "Brown", new Date(2006, 1, 12));

// Hinzufügen der Personen zur Schulklasse
mathClass.addPerson(person1);
mathClass.addPerson(person2);
mathClass.addPerson(person3);
mathClass.addPerson(person4);

// Ausgabe der Schulklasse und ihrer Mitglieder
mathClass.display(); // Um die Klasseninformationen anzuzeigen
mathClass.listPersons(); // Um die Personen anzuzeigen
