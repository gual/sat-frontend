import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

import { Establishment } from '../taxpayers/establishment';
import { Owner } from '../taxpayers/owner';
import { Company } from '../taxpayers/company';

let backendURL = "http://localhost:8000/";

@Injectable()
export class EstablishmentService {
  constructor(private http: Http) { }
  getAll() {
    return this.http.get(backendURL + 'establishments/').map(
      (response: Response) => response.json()
    );
  }

  add(establishment: any) {
    const body = JSON.stringify(establishment);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    console.log(establishment);

    return this.http.post(backendURL + 'establishments/', body, {headers: headers})
  }
}
