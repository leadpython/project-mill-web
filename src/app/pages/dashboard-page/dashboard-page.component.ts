import { Component, AfterViewChecked } from '@angular/core';

import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements AfterViewChecked {
  constructor(private AuthenticationService: AuthenticationService) { }
  ngAfterViewChecked() {
    // check session
    this.AuthenticationService.checkSession().subscribe((isSessionDone) => {
      // if session is done, logout
      if (isSessionDone) {
        // logout
        this.AuthenticationService.logout();
      }
    })
  }
}
