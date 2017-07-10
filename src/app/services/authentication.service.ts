import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  constructor(private _http: Http) {}
  authenticate(user: object) {
    return this._http.post('https://project-mill-backend.herokuapp.com/api/vendors/login', user).map((response) => {
      return response.json();
    });
  }
}
