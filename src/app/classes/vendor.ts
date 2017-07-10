export class Vendor {
  private email: String;
  private password: String;
  private firstname: String;
  private lastname: String;
  constructor(email: String, password: String, firstname: String, lastname: String) {
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
