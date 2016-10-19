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
  rateRanges: Token[] = [];
  rateDeterminants: any[] = [];
  subjectDeterminants: any[] = [];

  constructor(private _tributesService: TributesService, private router: Router) { }

  ngOnInit() {
    this.tokens = this._tributesService.getTokens();
    this.rateTokens = this._tributesService.getRateTokens();
    this.rateDeterminants = this._tributesService.getRateDeterminants();
    this.rateRanges = this._tributesService.getRateRanges();
    this.subjectDeterminants = this._tributesService.getSubjectDeterminants();
  }

  addTribute(form: NgForm) {
    this._tributesService.addFromForm(form);
    this.router.navigate(['/']);
  }

  addToken(text: string) {
    this._tributesService.addToken({name: text});
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
    this._tributesService.addRateRange({description: description, upper: upper, lower: lower, fixed: fixed, variable: variable});
  }
}
