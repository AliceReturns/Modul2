import { WeatherType } from "./weather-type";

let forecast = new Promise<WeatherType>((resolve, reject) => {
  let randomWeather = Math.floor(Math.random() * 10); // Zufälliger Wert zwischen 0 und 9

  if (randomWeather >= 0 && randomWeather <= 6) {
    resolve(randomWeather as WeatherType); // Gib den entsprechenden Enum-Wert zurück
  } else {
    reject("Weather forecast could not be determined"); // Fehlertext für Werte > 6
  }
});

// An das Promise hängen und das Ergebnis behandeln
forecast
  .then((weather) => {
    console.log(`Das Wetter ist: ${WeatherType[weather]}`); // Enum-Wert in Textform ausgeben
  })
  .catch((error) => {
    console.error("Ein Fehler ist aufgetreten:", error); // Fehler ausgeben
  });
