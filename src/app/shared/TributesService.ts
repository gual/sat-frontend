import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

import { NgForm } from '@angular/forms';

import { Tribute } from '../tributes/tribute';
import { TaxableIncome } from '../tributes/taxable-income';
import { Rate } from '../tributes/rate';
import { DeclarationPaymentMode } from '../tributes/declaration-payment-mode';
import { Determinant } from '../tributes/determinant';
import { Token } from '../tributes/token';

let tributes: Tribute[] = [];
let tokens: Token[] = [];
let rateTokens: Token[] = [];
let rateRanges: Token[] = [];
let rateDeterminants: any[] = [];
let subjectDeterminants: any[] = [];

let backendURL = "http://88.99.15.137/";
// let backendURL = "http://localhost:8000/";

@Injectable()
export class TributesService{

  constructor(private http: Http) { }

  getAll() {
    return this.http.get(backendURL + 'taxes/').map(
      (response: Response) => response.json()
    );
  }

  getTribute(id: string) : any {
    return this.http.get(backendURL + 'taxes/' + id).map(
      (response: Response) => response.json()
    );
  }

  getTokens() : Token[] {
    return tokens;
  }

  getRateTokens() : Token[] {
    return rateTokens;
  }

  getRateDeterminants() : any[] {
    return rateDeterminants;
  }

  getRateRanges() : any[] {
    return rateRanges;
  }

  getSubjectDeterminants() : any[] {
    return subjectDeterminants;
  }

  add(tribute: any) {
    const body = JSON.stringify(tribute);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    console.log(tribute);

    return this.http.post(backendURL + 'taxes/', body, {headers: headers})
  }

  addToken(token: Token) {
    tokens.push(token);
  }

  addRateToken(token: Token) {
    rateTokens.push(token);
  }

  addRateRange(range: any) {
    rateRanges.push(range);
  }

  addRateDeterminant(determinant: any) {
    rateDeterminants.push(determinant);
  }

  addSubjectDeterminant(determinant: any) {
    subjectDeterminants.push(determinant);
  }

  addFromForm(form: NgForm) {
    let tribute = {
      name: form.value.name,
      origin_law: form.value.law,
      taxable_subject: form.value.subject,
      grace_days: form.value.graceDays,
      taxable_income: {
        name: form.value.ti_name,
        description: form.value.ti_description,
        tokens: tokens,
        formula: form.value.ti_formula
      },
      rate: {
        tokens: rateTokens,
        formula: form.value.rate_formula,
        determinants: rateDeterminants,
        ranges: rateRanges
      },
      declaration_payment_mode: {
        declaration_periodicity: form.value.dec_periodicity,
        declaration_since: form.value.dec_since,
        declaration_until: form.value.dec_until,
        payment_periodicity: form.value.pay_periodicity,
        payment_since: form.value.pay_since,
        payment_until: form.value.pay_until
      },
      determinants: subjectDeterminants
    }

    this.add(tribute).subscribe(
      (resp: Response) => console.log(resp.json())
    );

    tokens = [];
    rateTokens = [];
    rateRanges = [];
    rateDeterminants = [];
    subjectDeterminants = [];
  }
}
