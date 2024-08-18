import Song from "./song";
import SongWithUnknownArtists from "./uknownArtists";

const song = new Song("Bohemian Rhapsody", "Queen");
song._durationInSeconds = 60;
console.log(song);

const song2 = new Song("Michael Jackson", "Beed it");
song2._durationInSeconds = 120;
console.log(song2);

const song3 = new SongWithUnknownArtists("Unknown Title");
song3._durationInSeconds = 180;
console.log(song3);

song3.setArtist("Michael Jackson");
console.log(song3);
