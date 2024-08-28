console.log("%c ==== Storage ====", "color: orange");
//! ============= Storage =============
//=> loacalStorage
//-> ist auch Teil des BOM, weil ich auf den internen SPeicherplatz des Browsers zugreife
//-> speichert fuer eine URL Daten fest im Browser

const languageSettings = { language: "German", subTitles: "English" };

const settingsAsJSON = JSON.stringify(languageSettings);

localStorage.setItem("languageSettingPizza", settingsAsJSON);

const settingsFromLocalStorage = localStorage.getItem("languageSettingPizza");
console.log(settingsFromLocalStorage);

if (settingsFromLocalStorage) {
  const parsedLangSettingsObj = JSON.parse(settingsFromLocalStorage);
  console.log(parsedLangSettingsObj);
}

//=> session storage
//-> genauso benutzbar / gleiche Logik wie local storage
//-> UNTERSCHIED: wenn ich den Tab oder Browser schliesse ist der Eintrag weg!!
//? wenn ich wirklich nur etwas temporaer speichen moechte, dann nutze ich lieber das

const languageSettings2 = { language: "English", subTitles: "Spanish" };
const settingsToJSON = JSON.stringify(languageSettings2);
sessionStorage.setItem("languagaeSettings2", settingsToJSON);

//-> ICE CREAM EXAMPLE
const iceCreamFlavorsArr = [
  {
    name: "Vanilla",
    price: 2.5,
    isPopular: true,
  },
  {
    name: "Chocolate",
    price: 3.0,
    isPopular: true,
  },
  {
    name: "Strawberry",
    price: 2.8,
    isPopular: false,
  },
  {
    name: "Mint Chocolate Chip",
    price: 3.2,
    isPopular: true,
  },
  {
    name: "Cookie Dough",
    price: 3.5,
    isPopular: false,
  },
];

localStorage.setItem("iceCreamFlavors", JSON.stringify(iceCreamFlavorsArr));

const storedIceCream = localStorage.getItem("iceCreamFlavors");

if (storedIceCream) {
  const parsedIceCream = JSON.parse(storedIceCream);
  console.log(parsedIceCream);

  //FN die die IceCreamCards im HTML ausgiebt
} else {
  // weitere Logik
}
