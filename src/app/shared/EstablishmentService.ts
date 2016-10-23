import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

import { Establishment } from '../taxpayers/establishment';
import { Owner } from '../taxpayers/owner';
import { Company } from '../taxpayers/company';

let establishments: Establishment[] = [];

@Injectable()
export class EstablishmentService {
  constructor(private http: Http) { }
  getAll() {
    return this.http.get('https://mutis-prototype.firebaseio.com/establishments.json').map(
      (response: Response) => response.json()
    );
  }

  add(establishment: any) {
    const body = JSON.stringify(establishment);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.post('https://mutis-prototype.firebaseio.com/establishments.json', body, {headers: headers})
  }
}
