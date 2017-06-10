import { Component } from '@angular/core';

@Component({
  selector: 'authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.css']
})
export class AuthenticationPageComponent {
  public isRegister: boolean = false;
  constructor() {}
}
