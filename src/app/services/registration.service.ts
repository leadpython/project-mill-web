import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService {
  constructor(private _http: Http) {}
  register(user: object) {
    return this._http.post('https://project-mill-backend.herokuapp.com/api/vendors/register', user).map((response) => {
      return response.json();
    });
  }
}

