import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  constructor(private _http: Http) {
  }
  registerVendor(vendor: object) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('https://project-mill-backend.herokuapp.com/api/vendors', vendor, options).map((response) => {
      return response.json();
    });
  }
  getAllVendors() {
    return this._http.get('https://project-mill-backend.herokuapp.com/api/vendors').map((response) => {
      return response.json();
    });
  }

}
