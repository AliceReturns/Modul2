class Customer {
  private _name: string;
  private _email: string;
  private _adress: string;
  private _postalCode: number;
  private _city: string;

  constructor(
    name: string,
    email: string,
    adress: string,
    postalCode: number,
    city: string
  ) {
    this._name = name;
    this._email = email;
    this._adress = adress;
    this._postalCode = postalCode;
    this._city = city;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
    if (value.length < 3) {
      throw new Error("Name must be at least 3 characters");
    } else if (value.length > 60) {
      throw new Error("Name must be under 50 characters");
    }
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
    if (!value.includes("@" && ".")) {
      throw new Error("Invalid email. Must contain '@' and '.'");
    }
  }

  get adress(): string {
    return this._adress;
  }

  set adress(value: string) {
    this._adress = value;
    if (value.length < 5) {
      throw new Error("Adress must be at least 5 characters");
    }
  }

  get postalCode(): number {
    return this._postalCode;
  }

  set postalCode(value: number) {
    this._postalCode = value;
    if (value.toString().length !== 5 || value < 0 || value > 99999) {
      throw new Error("Postal code must be 5 digits");
    }
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
    if (value.length < 3) {
      throw new Error("City must be at least 3 characters");
    }
  }
}

export default Customer;
