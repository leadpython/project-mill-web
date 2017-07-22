import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  constructor(private _http: Http, private Router: Router) {}
  authenticate(user: object) {
    return this._http.put('https://project-mill-backend.herokuapp.com/api/vendors/login', user).map((response) => {
      return response.json();
    });
  }
  checkSession() {
    var thisClass = this;
    let user: object = {
      id: window.localStorage.getItem('projectMillUserId') || '123',
      token: window.localStorage.getItem('projectMillToken') || '123'
    };
    this._http.put('https://project-mill-backend.herokuapp.com/api/vendors/check-session', user).map((response) => {
      return response.json();
    }).subscribe((data) => {
      if (data) {
        thisClass.logout();
      }
    });
  }
  logout() {
    this.Router.navigateByUrl('/');
  }
}
