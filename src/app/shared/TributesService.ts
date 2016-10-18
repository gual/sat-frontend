import { NgForm } from '@angular/forms';

import { Tribute } from '../tributes/tribute';
import { TaxableIncome } from '../tributes/taxable-income';
import { Calculation } from '../tributes/calculation';
import { DeclarationPaymentMode } from '../tributes/declaration-payment-mode';
import { Determinant } from '../tributes/determinant';
import { Token } from '../tributes/token';

let tributes: Tribute[] = [];
let tokens: Token[] = [];
let cTokens: Token[] = [];
let determinants: Determinant[] = [];
let subjectDeterminants: Determinant[] = [];

export class TributesService{
  getAll() : Tribute[] {
    return tributes;
  }

  getTribute(id: number) : Tribute {
    return tributes[id];
  }

  getTokens() : Token[] {
    return tokens;
  }

  getCalcTokens() : Token[] {
    return cTokens;
  }

  getDeterminants() : Determinant[] {
    return determinants;
  }

  getSubjectDeterminants() : Determinant[] {
    return subjectDeterminants;
  }

  add(tribute: Tribute) {
      tributes.push(tribute);
      console.log(tributes);
  }

  addToken(token: Token) {
    tokens.push(token);
  }

  addCalcToken(token: Token) {
    cTokens.push(token);
  }

  addDeterminant(determinant: Determinant) {
    determinants.push(determinant);
  }

  addSubjectDeterminant(determinant: Determinant) {
    subjectDeterminants.push(determinant);
  }

  addFromForm(form: NgForm) {
    let taxableIncome: TaxableIncome =
      {name: form.value.ti_name, description: form.value.ti_description, formula: form.value.ti_formula, tokens: tokens}

    let calculation: Calculation =
      {fixedFee: form.value.c_fixed_fee, variableFee: form.value.c_variable_fee, formula: form.value.c_formula, validUntil: form.value.c_valid_until}

    let decPayMode: DeclarationPaymentMode =
      { declarationPeriodicity: form.value.dec_periodicity, declarationSince: form.value.dec_since, declarationUntil: form.value.dec_until,
        paymentPeriodicity: form.value.payPeriodicity, paymentSince: form.value.pay_since, paymentUntil: form.value.pay_until}

    let tribute: Tribute =
      { id: tributes.length, name: form.value.name, originLaw: form.value.law, taxableIncome: taxableIncome,
        calculation: calculation, declarationPaymentMode: decPayMode, determinants: determinants }

    this.add(tribute);

    tokens = [];
    determinants = [];
  }
}
