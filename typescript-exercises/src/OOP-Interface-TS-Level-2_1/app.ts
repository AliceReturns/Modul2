import Subordinate from "./subordinate";
import Manager from "./manager";
import Trainee from "./trainee";

const subordinate1 = new Subordinate(
  "John Doe",
  30,
  "Software Developer",
  new Date()
);
const subordinate2 = new Subordinate(
  "Jane Doe",
  25,
  "Software Developer",
  new Date()
);
const subordinate3 = new Subordinate(
  "James Doe",
  35,
  "Software Developer",
  new Date()
);

const manager1 = new Manager("Sam Smith", 40, "Software Development Manager");
manager1.assignedEmployeesList.push(subordinate1);

const trainee = new Trainee("liu xiao", 30, "Software Developer", new Date());
trainee.assignedEmployeesList.push(subordinate3);
const trainee2 = new Trainee(
  "duc nguyen",
  25,
  "Software Developer",
  new Date()
);
trainee2.assignedEmployeesList.push(subordinate2);
