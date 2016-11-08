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
let rateRanges: any[] = [];
let rateDeterminants: any[] = [];
let subjectDeterminants: any[] = [];

let backendURL = "http://88.99.15.137/";
// let backendURL = "http://localhost:8000/";

@Injectable()
export class TributesService{

  constructor(private http: Http) { }

  post(request, url) {
    const body = JSON.stringify(request);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    console.log("sending:" + body);

    return this.http.post(url, body, {headers: headers})
  }

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

  getTaxableIncome(id: string) : any {
    return this.http.get(backendURL + 'taxable_incomes/' + id).map(
      (response: Response) => response.json()
    );
  }

  getRate(id: string) : any {
    return this.http.get(backendURL + 'rates/' + id).map(
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

  addTaxableIncome(taxable_income: any) { return this.post(taxable_income, backendURL + 'taxable_incomes/'); }

  addRate(rate: any) { return this.post(rate, backendURL + 'rates/'); }

  add(tribute: any) { return this.post(tribute, backendURL + 'taxes/'); }

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
    let taxableIncome = {
      name: form.value.ti_name,
      description: form.value.ti_description,
      tokens: tokens,
      formula: form.value.ti_formula
    };

    let rate = {
      tokens: rateTokens,
      formula: form.value.rate_formula,
      determinants: rateDeterminants,
      ranges: rateRanges
    }

    let tribute = {
      name: form.value.name,
      short_name: form.value.short_name,
      origin_law: form.value.law,
      taxable_subject: form.value.subject,
      grace_days: form.value.grace_days,
      declaration_payment_mode: {
        declaration_periodicity: form.value.dec_periodicity,
        declaration_since: form.value.dec_since,
        declaration_until: form.value.dec_until,
        payment_periodicity: form.value.pay_periodicity,
        payment_since: form.value.pay_since,
        payment_until: form.value.pay_until
      },
      determinants: subjectDeterminants,
      rate_id: 0,
      taxable_income_id: 0,
    }

    this.addRate(rate).subscribe(
      (rateResp: Response) => {
        let rateData = rateResp.json();
        console.log(rateData);
        tribute.rate_id = rateData.id;

        this.addTaxableIncome(taxableIncome).subscribe(
          (taxIncResp: Response) => {
            let taxableIncomeData = taxIncResp.json();
            console.log(taxableIncomeData);
            tribute.taxable_income_id = taxableIncomeData.id

            this.add(tribute).subscribe(
              (resp: Response) => {
                console.log(resp.json());
              }
            );
          }
        );
      }
    );

    tokens = [];
    rateTokens = [];
    rateRanges = [];
    rateDeterminants = [];
    subjectDeterminants = [];
  }
}
