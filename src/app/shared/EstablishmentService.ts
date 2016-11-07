import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

import { Establishment } from '../taxpayers/establishment';
import { Owner } from '../taxpayers/owner';
import { Company } from '../taxpayers/company';

// let backendURL = "http://localhost:8000/establishments/";
let backendURL = "http://88.99.15.137/establishments/";

@Injectable()
export class EstablishmentService {

  constructor(private http: Http) { }

  post(request, url) {
    const body = JSON.stringify(request);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    console.log("sending:" + request);

    return this.http.post(url, body, {headers: headers})

  }

  getAll() {
    return this.http.get(backendURL).map(
      (response: Response) => response.json()
    );
  }

  add(establishment: any) { return this.post(establishment, backendURL); }

  get(id: string) : any {
    return this.http.get(backendURL + id).map(
      (response: Response) => response.json()
    );
  }

  associateTribute(propertyId, tributeId) {
    return this.post({'tribute': tributeId}, backendURL + propertyId + '/add_tribute/');
  }

  disassociateTribute(propertyId, tributeId) {
    return this.post({'tribute': tributeId}, backendURL + propertyId + '/remove_tribute/');
  }

}
