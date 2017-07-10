import { Component } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';
import { RegistrationService } from 'app/services/registration.service';

@Component({
  selector: 'authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.css']
})
export class AuthenticationPageComponent {
  public loginEmail: string;
  public loginPassword: string;
  public registerEmail: string;
  public registerPassword: string;
  public registerFirstname: string;
  public registerLastname: string;
  public isAuthenticated: boolean = true;
  public isValidEmail: boolean = true;
  public isValidPassword: boolean = true;
  public isValidFirstname: boolean = true;
  public isValidLastname: boolean = true;
  public doesUserExist: boolean = false;

  constructor(private AuthenticationService: AuthenticationService, private RegistrationService: RegistrationService) {}
  login() {
    let user: object = { email: this.loginEmail, password: this.loginPassword};
    this.AuthenticationService.authenticate(user).subscribe((data) => {
      this.isAuthenticated = data.isUserAuthenticated;
      if (this.isAuthenticated) {
        window.localStorage.setItem('projectMillToken', data.token);
        window.localStorage.setItem('projectMillUserId', data.id);
      }
    })
  }
  register() {
    let user: object = { email: this.registerEmail || '', password: this.registerPassword || '', firstname: this.registerFirstname || '', lastname: this.registerLastname || '' };
    if (!this.registrationCheck(user)) {
      // do not go through with registration if information are invalid
      return;
    }
    this.RegistrationService.register(user).subscribe((data) => {
      this.doesUserExist = data.doesUserExist;
    })
  }
  registrationCheck(user) {
    this.isValidEmail = user.email.includes('@') && user.email.length > 0 && user.email.includes('.');
    this.isValidPassword = /\d/.test(user.password);
    this.isValidFirstname = user.firstname.length > 0;
    this.isValidLastname = user.lastname.length > 0;
    return this.isValidEmail && this.isValidPassword && this.isValidFirstname && this.isValidLastname;
  }
}

/*
Vendor can create service-types that have a predetermined duration.
Example: customer wants a haircut, vendor can set haircuts to 30-minutes, and customer will only see open time slots that are 30 minutes long. If a customer wants a color and vendor sets it for an hour or an hour and a half, customer can only see open time slots with those durations.
Customer can pick multiple services.
*/