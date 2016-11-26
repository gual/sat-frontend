import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
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
let subDetTokens: Token[] = [];
let rateRanges: any[] = [];
let rateDeterminants: any[] = [];
let subjectDeterminants: any[] = [];

let payPeriods: any[] = [];
let intRanges: any[] = [];
let penRanges: any[] = [];

let backendURL = environment.backendUrl;

@Injectable()
export class TributesService{

  constructor(private http: Http) { }

  post(request, url) {
    const body = JSON.stringify(request);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    console.log("sending:" + body);


    return this.http.post(url + '.json', body, {headers: headers})
  }

  getAll() {
    console.log("Connecting to: " + backendURL);
    return this.http.get(backendURL + 'taxes.json').map(
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

  getSubDetTokens() : Token[] {
    return subDetTokens;
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

  getPayPeriods() : any[] {
    return payPeriods;
  }

  getIntRanges() : any[] {
    return intRanges;
  }

  getPenRanges() : any[] {
    return penRanges;
  }

  addTaxableIncome(taxable_income: any) { return this.post(taxable_income, backendURL + 'taxable_incomes/'); }

  addRate(rate: any) { return this.post(rate, backendURL + 'rates/'); }

  add(tribute: any) { return this.post(tribute, backendURL + 'taxes/'); }

  addToken(token: Token) {
    tokens.push(token);
  }

  addSubDetToken(token: Token) {
    subDetTokens.push(token);
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

  addPayPeriod(payPeriod: any) {
    payPeriods.push(payPeriod);
  }

  addIntRange(intRange: any) {
    intRanges.push(intRange);
  }

  addPenRange(penRange: any) {
    penRanges.push(penRange);
  }

  addFromForm(form: NgForm) {
    let aTribute = form.value;

    aTribute.rate_tokens = rateTokens;
    aTribute.rate_ranges = rateRanges;
    aTribute.ti_tokens = tokens;
    aTribute.rate_determinants = rateDeterminants
    aTribute.subject_determinants = subjectDeterminants

    aTribute.pay_periods = payPeriods;
    aTribute.pay_int_ranges = intRanges;
    aTribute.pay_pen_ranges = penRanges;

    aTribute.subDetTokens = subDetTokens;

    // let generateDate = (month, day) => {
    //   let genDate = new Date();
    //   genDate.setMonth(month);
    //   genDate.setDate(day);
    //   return genDate.toISOString().slice(0, 10);
    // }

    // let declaration_since = generateDate(form.value.dec_since_month, form.value.dec_since_day);
    // let declaration_until = generateDate(form.value.dec_until_month, form.value.dec_until_day);

    // let payment_since = generateDate(form.value.pay_since_month, form.value.pay_since_day);
    // let payment_until = generateDate(form.value.pay_until_month, form.value.pay_until_day);

    // let taxableIncome = {
    //   name: form.value.ti_name,
    //   description: form.value.ti_description,
    //   tokens: tokens,
    //   formula: form.value.ti_formula
    // };

    // let rate = {
    //   tokens: rateTokens,
    //   formula: form.value.rate_formula,
    //   determinants: rateDeterminants,
    //   ranges: rateRanges
    // }

    // let tribute = {
    //   name: form.value.name,
    //   short_name: form.value.short_name,
    //   origin_law: form.value.law,
    //   taxable_subject: form.value.subject,
    //   grace_days: form.value.grace_days,
    //   declaration_payment_mode: {
    //     declaration_periodicity: form.value.dec_periodicity,
    //     declaration_since: declaration_since,
    //     declaration_until: declaration_until,
    //     payment_periodicity: form.value.pay_periodicity,
    //     payment_since: payment_since,
    //     payment_until: payment_until
    //   },
    //   determinants: subjectDeterminants,
    //   rate_id: 0,
    //   taxable_income_id: 0,
    // }

    // this.addRate(rate).subscribe(
    //   (rateResp: Response) => {
    //     let rateData = rateResp.json();
    //     console.log(rateData);
    //     tribute.rate_id = rateData.id;

    //     this.addTaxableIncome(taxableIncome).subscribe(
    //       (taxIncResp: Response) => {
    //         let taxableIncomeData = taxIncResp.json();
    //         console.log(taxableIncomeData);
    //         tribute.taxable_income_id = taxableIncomeData.id

            this.add(aTribute).subscribe(
              (resp: Response) => {
                console.log(resp.json());
              }
            );
        //   }
        // );
      // }
    // );

    tokens = [];
    rateTokens = [];
    rateRanges = [];
    rateDeterminants = [];
    subjectDeterminants = [];
  }
}
