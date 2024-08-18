class Vocabulary {
  private _words: string[] = [];
  protected _language: string = "en";

  constructor(words: string[], language: string) {
    this._words = words;
    this._language = language;
  }

  public addWord(word: string) {
    if (word.length > 0 && !this._words.includes(word)) {
      this._words.push(word);
    }
  }

  public displayAll() {
    console.log(this._language);
    console.log(this._words) + ",";
  }
}

export default Vocabulary;
