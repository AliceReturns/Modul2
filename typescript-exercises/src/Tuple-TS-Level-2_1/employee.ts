console.clear();

// Ein Tuple, das einen Mitarbeitenden repräsentiert besteht aus Nummer (number), Name (string), Abteilung (string) und Jahresgehalt (number)

type Employee = [number, string, string, number];

// Erstelle jetzt ein Array von diesen Tupeln, das mindestens 5 Mitarbeitende mit beliebigen Daten enthält

let employees: Employee[] = [
  [1, "Alice", "IT", 60000],
  [2, "Bob", "Vertrieb", 55000],
  [3, "Charlie", "Personal", 65000],
  [4, "Diana", "Finanzen", 70000],
  [5, "Eve", "Marketing", 58000],
];

// Lass dir alle Mitarbeitenden mit ihren Daten auf der Konsole ausgeben

for (let Employee of employees) {
  let [number, name, department, salary] = Employee;
  console.log(
    `Mitarbeiter Nummer ${number}: ${name} arbeitet in der Abteilung ${department} und hat ein Jahresgehalt von ${salary} Euro.`
  );
}
