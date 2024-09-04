// console.clear();
// const fetch = document.getElementById("fetch");

// const link_API = "https://picsum.photos/v2/list";

// // Definiere den Typ für die von der Picsum-API zurückgegebenen Daten
// type ImageData = {
//   id: string;
//   author: string;
//   width: number;
//   height: number;
//   url: string;
//   download_url: string;
// };

// fetch(link_API)
//   .then((response: Response) => {
//     if (!response.ok) {
//       // falls die Antwort nicht erfolgreich ist
//       throw new Error("Response doesn't work!");
//     }
//     return response.json(); // wandelt die Daten in ein JSON-Objekt um
//   })
//   .then((images: ImageData[]) => {
//     console.log(images); // Ausgabe der gesamten Liste von Bildern
//     images.forEach((image: ImageData) => {
//       //durchlaufe jedes Bild
//       console.log(`ID: ${image.id}, Author: ${image.author}`); // Ausgabe der ID und des Autors
//       console.log(`Download URL: ${image.download_url}`); // Ausgabe der Download-URL
//     });
//   })
//   .catch((error: Error) => {
//     // fängt Fehler ab
//     console.error("Fehler beim Abrufen der API:", error);
//   })
//   .finally(() => {
//     // wird immer ausgeführt, egal ob ein Fehler aufgetreten ist oder nicht
//     console.log("Done with fetching the images");
//   });

const link_API = "https://picsum.photos/v2/list";

// Funktion zum Abrufen der Bilderliste
fetch(link_API)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Fehler beim Abrufen der API");
    }
    return response.json();
  })
  .then((images) => {
    // Den Body der Seite auswählen, um die Figure-Elemente einzufügen
    const body = document.body;

    // Für jedes Bild ein Figure-Element erstellen und in den Body einfügen
    images.forEach((image: { download_url: string; author: string }) => {
      // Erstelle ein figure-Element
      const figure = document.createElement("figure");

      // Erstelle das Bild-Element
      const img = document.createElement("img");
      img.src = image.download_url;
      img.alt = image.author;

      // Erstelle das figcaption-Element für den Autor
      const figcaption = document.createElement("figcaption");
      figcaption.textContent = `Autor: ${image.author}`;

      // Füge das Bild und die Bildunterschrift in das figure-Element ein
      figure.appendChild(img);
      figure.appendChild(figcaption);

      // Füge das figure-Element in den Body ein
      body.appendChild(figure);
    });
  })
  .catch((error) => {
    console.error("Fehler:", error);
  });
