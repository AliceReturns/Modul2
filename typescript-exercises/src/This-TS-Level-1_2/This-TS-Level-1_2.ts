console.clear();

document.getElementById("person") as HTMLElement;

let person = {
  vorname: "Anton",
  nachname: "Fish",
  alter: 34,
  familienstand: "ledig",
  groesse: 1.78,
  zeigeProfil: function () {
    return `Vorname, Nachname ... `;
  },
};

console.log(person);

let zeigeProfil = () => {
  document.textContent = `Vorname: ${person.vorname}, Nachname: ${person.nachname}, Alter: ${person.alter}, Familienstand: ${person.familienstand}, Groesse: ${person.groesse}`;
};
console.log(zeigeProfil());

//document.getElementById("person").innerHTML = person.profil();
