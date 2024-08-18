class LiberyBook {
  private _id: string = "";
  private _currentOwner: string = "";
  public _title: string = "";
  public _author: string = "";
  private _isBorrowed: boolean = false;

  get id(): string {
    return this._id;
  }

  get currentOwner(): string {
    return this._currentOwner;
  }

  get isBorrowed(): boolean {
    return this._isBorrowed;
  }

  constructor(title: string, author: string) {
    this._title = title;
    this._author = author;
    this._id = Math.random().toString(16).slice(2);
  }

  private generatedId(): string {
    return `${this._author.replace("", "")}-${Date.now()}`;
  }

  public borrowBook(currentOwner: string): void {
    if (this._isBorrowed) {
      console.log("Book is already borrowed");
      return;
    }
    this._isBorrowed = true;
    this._currentOwner = user;
  }
}

export default LiberyBook;
