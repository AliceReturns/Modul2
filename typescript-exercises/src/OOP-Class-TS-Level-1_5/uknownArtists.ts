import Song from "./song";

class SongWithUnknownArtists extends Song {
  constructor(title: string) {
    super(title, "Unknown Artist");
  }

  setArtist(name: string) {
    this._artist = name;
  }
}

export default SongWithUnknownArtists;
