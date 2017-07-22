import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  constructor(private AuthenticationService: AuthenticationService) { }
  ngOnInit() {
    // check session
    this.AuthenticationService.checkSession();
  }
}
