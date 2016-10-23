import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

import { Property } from '../taxpayers/property';
import { Owner } from '../taxpayers/owner';
import { Company } from '../taxpayers/company';

let properties: Property[] = [];

@Injectable()
export class PropertyService{
  constructor (private http: Http) { }

  getAll() {
    return this.http.get('https://mutis-prototype.firebaseio.com/properties.json').map(
      (response: Response) => response.json()
    );
  }

  add(property: any) {
    const body = JSON.stringify(property);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.post('https://mutis-prototype.firebaseio.com/properties.json', body, {headers: headers})
  }
}
