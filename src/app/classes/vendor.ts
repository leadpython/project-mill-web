export class Vendor {
  private username: String;
  private email: String;
  private password: String;
  private firstname: String;
  private lastname: String;
  constructor(username: String, email: String, password: String, firstname: String, lastname: String) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
