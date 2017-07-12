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
    let user = {
      id: window.localStorage.getItem('projectMillUserId'),
      token: window.localStorage.getItem('projectMillToken')
    };
    return this._http.put('https://project-mill-backend.herokuapp.com/api/vendors/login', user).map((response) => {
      return response.json();
    });
  }
  logout() {
    window.localStorage.setItem('projectMillUserId', null);
    window.localStorage.setItem('projectMillToken', null);
    this.Router.navigateByUrl('/');
  }
}
