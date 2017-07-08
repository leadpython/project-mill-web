import { Component } from '@angular/core';
import { HttpService } from 'app/services/http.service';

@Component({
  selector: 'authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.css']
})
export class AuthenticationPageComponent {
  public username: string;
  public password: string;

  constructor(private HttpService: HttpService) {}
  login() {
    this.HttpService.getAllVendors().subscribe((data) => {
      console.log(data);
    })
  }
  register() {
    let vendor = { username: '', password: ''};
    vendor.username = this.username;
    vendor.password = this.password;
    this.HttpService.registerVendor(vendor).subscribe((data) => {
      console.log(data);
    })
  }
}

/*
Vendor can create service-types that have a predetermined duration.
Example: customer wants a haircut, vendor can set haircuts to 30-minutes, and customer will only see open time slots that are 30 minutes long. If a customer wants a color and vendor sets it for an hour or an hour and a half, customer can only see open time slots with those durations.
Customer can pick multiple services.
*/