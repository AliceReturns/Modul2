type WeeklyMeeting = { title: string; startDate: Date; weekday: string };

const dailyMeet: WeeklyMeeting = {
  title: "Daily",
  startDate: new Date(),
  weekday: "Montag",
};

const TW_Meet: WeeklyMeeting = {
  title: "TrainsWeekly",
  startDate: new Date(),
  weekday: "Mittwoch",
};

const FeedBack_Meet: WeeklyMeeting = {
  title: "Feedback",
  startDate: new Date(),
  weekday: "Donnerstag",
};

const allMeeting: WeeklyMeeting[] = [dailyMeet, TW_Meet, FeedBack_Meet];

allMeeting.forEach((meeting: WeeklyMeeting) => {
  if (meeting.weekday === "Montag") {
    console.log(`Daily Meeting findet am ${meeting.weekday} statt`);
  } else if (meeting.weekday === "Mittwoch") {
    console.log(`TrainersWeeky Meeting findet am ${meeting.weekday} statt`);
  } else if (meeting.weekday === "Donnerstag") {
    console.log(`FeedBack Meeting findet am ${meeting.weekday} statt`);
  }
});

// * Enum => ist eine vordefinierte Auflistung von Werten hinter denen Number stecken

enum Weekday {
  Monday, // 0
  Teusday, // 1
  Wednesday, // 2
  Thursday, // 3
  Friday, // 4
  Saturday, // 5
  Sunday, // 6
}

console.log(Weekday);

type WeeklyMeeting2 = { title: string; startDate: Date; weekday: Weekday };
const vorlesung: WeeklyMeeting2 = {
  title: "Statisik",
  startDate: new Date(),
  weekday: Weekday.Monday,
};
switch (vorlesung.weekday) {
  case Weekday.Monday:
    console.log("Heute ist Montag");
    const status1 = document.createElement("p");
    status1.textContent = "Heute ist Montag";
    document.body.appendChild(status1);
    break;
  case Weekday.Teusday:
    console.log("Am Dienstag ist deine Vorlesung");
    break;
  case Weekday.Wednesday:
    console.log("Du hast heute frei");
    const status2 = document.createElement("p");
    status2.textContent = "Du hast heute Frei";
    document.body.appendChild(status2);
    break;
  default:
    console.log("ungültiger Wochentag");
    break;
}

console.clear();

enum OrderStatusEinfach {
  Created,
  Accepted,
}

console.log(OrderStatusEinfach);

enum OrderStatus {
  Created = "Created",
  Accepted = "Accepted",
  InProgress = "InProgress",
  InDelivery = "InDelivery",
  Delivered = "Delivered",
  Cancelled = "Cancelled",
  Deleted = "Deleted",
}

console.log(OrderStatus);

type ShopOrder = {
  number: number;
  customerNumber: number;
  status: OrderStatus;
};

const oder477: ShopOrder = {
  number: 477,
  customerNumber: 5433,
  status: OrderStatus.Created,
};

oder477.status = OrderStatus.InDelivery;

console.log("Bestellung wurde angelegt, Status =>", oder477.status); // Created => InDelivery

console.log("Bezeichnung von Orderstatus direkt index", OrderStatusEinfach[1]);
console.log(
  "Bezeichnung von Orderstatus über Variable",
  OrderStatusEinfach.Accepted
);
