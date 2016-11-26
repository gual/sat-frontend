import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Tribute } from './tribute';
import { Token } from './token';
import { Determinant } from './determinant';

import { TributesService } from '../shared/TributesService';

@Component({
  selector: 'sf-tribute-form',
  templateUrl: './tribute-form.component.html'
})
export class TributeFormComponent implements OnInit {
  tokens: Token[] = [];
  rateTokens: Token[] = [];
  subDetTokens: Token[] = [];
  rateRanges: Token[] = [];
  rateDeterminants: any[] = [];
  subjectDeterminants: any[] = [];

  payPeriods: any[] = [];
  intRanges: any[] = [];
  penRanges: any[] = [];

  constructor(private _tributesService: TributesService, private router: Router) { }

  ngOnInit() {
    this.tokens = this._tributesService.getTokens();
    this.subDetTokens = this._tributesService.getSubDetTokens();
    this.rateTokens = this._tributesService.getRateTokens();
    this.rateDeterminants = this._tributesService.getRateDeterminants();
    this.rateRanges = this._tributesService.getRateRanges();
    this.subjectDeterminants = this._tributesService.getSubjectDeterminants();

    this.payPeriods = this._tributesService.getPayPeriods();
    this.intRanges = this._tributesService.getIntRanges();
    this.penRanges = this._tributesService.getPenRanges();
  }

  addTribute(form: NgForm) {
    this._tributesService.addFromForm(form);
    this.router.navigate(['/']);
  }

  addToken(text: string) {
    this._tributesService.addToken({name: text});
  }

  addSubDetToken(text: string) {
    this._tributesService.addSubDetToken({name: text});
  }

  addRateToken(text: string) {
    this._tributesService.addRateToken({name: text});
  }

  addRateDeterminant(description: string, condition: string, value: string) {
    this._tributesService.addRateDeterminant({name: description, condition: condition, value: value})
  }

  addSubjectDeterminant(description: string, condition: string, value: string) {
    this._tributesService.addSubjectDeterminant({name: description, condition: condition, value: value})
  }

  addRateRange(description: string, upper: string, lower: string, fixed: string, variable: string) {
    this._tributesService.addRateRange({name: description, upper_limit: upper, lower_limit: lower, fixed_amount: fixed, variable_amount: variable});
  }

  addPayPeriod({}) {
    this._tributesService.addPayPeriod({});
  }

  addIntRange(upper: string, lower: string, val: string) {
    this._tributesService.addIntRange({upper: upper, lower: lower, val: val});
  }

  addPenRange(upper: string, lower: string, val: string) {
    this._tributesService.addPenRange({upper: upper, lower: lower, val: val});
  }
}
