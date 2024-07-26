console.clear();

const artworks: string[] = [
  "Die Sternennacht - Vincent van Gogh",
  "Guernica - Pablo Picasso",
  "Die Geburt der Venus - Sandro Botticelli",
  "Die Nachtwache - Rembrandt",
  "Die Mona Lisa - Leonardo da Vinci",
  "Die Kartoffelesser - Vincent van Gogh",
  "Die Schrei - Edvard Munch",
  "Das letzte Abendmahl - Leonardo da Vinci",
  "Die freudige Botschaft - James Tissot",
  "Der Garten der Lüste - Hieronymus Bosch",
];

const artworkDates: string[] = [
  "Die Sternennacht - 1889",
  "Guernica - 1937",
  "Die Geburt der Venus - 1486",
  "Die Nachtwache - 1642",
  "Die Mona Lisa - 1503",
  "Die Kartoffelesser - 1885",
  "Die Schrei - 1893",
  "Das letzte Abendmahl - 1495",
  "Die freudige Botschaft - 1885",
  "Der Garten der Lüste - 1505",
];

function searchArtworkName(artworkName: string): void {
  const searchName: string | undefined = artworks.find
    (artworkName) => artworkName === "Die Sternennacht - 1889"
  const searchDate: string | undefined = artworkDates.find(
    (artworkName) => artworkName === "Die Sternennacht - 1889"
  );
  console.log(searchName);

  if (artworkName === undefined) {
    console.log("Artwork" + [artworkName] + "not found");
  } else {
    console.log( "'Die Sternennacht' wurde von Vincent van Gogh im Jahre 1889 gemalt" );
  }
}
