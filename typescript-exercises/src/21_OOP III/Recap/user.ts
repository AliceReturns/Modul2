console.clear();

class User {
  _userName: string = "";
  _email: string = "";
  _password: string = "";

  get userName() {
    return this._userName;
  }

  set userName(value: string) {
    if (value.length >= 6 && value.length <= 20) {
      this._userName = value;
    } else {
      console.log("Username must be between 6 and 20 characters.");
    }
  }

  get email() {
    return this._email;
  }

  set email(value: string) {
    if (value.includes("@") && value.includes(".")) {
      this._email = value;
    } else {
      console.log("Invalid email address. Must contain '@' and '.'");
    }
  }

  get password() {
    return this._password;
  }

  set password(value: string) {
    if (value.length >= 8 && value.length <= 20) {
      this._password = value;
    } else {
      console.log("Password must be between 8 and 20 characters.");
    }
  }

  constructor(userName: string) {
    this._userName = userName;
  }
}

const user1 = new User();
user1.userName = "Batman";

console.log(user1.email);
//user1.email = "test";
user1.email = "test@gmail.com";

export default User;
