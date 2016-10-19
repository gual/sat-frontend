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
  cTokens: Token[] = [];
  determinants: Determinant[] = [];
  subjectDeterminants: Determinant[] = [];

  constructor(private _tributesService: TributesService, private router: Router) { }

  ngOnInit() {
    this.tokens = this._tributesService.getTokens();
    this.cTokens = this._tributesService.getCalcTokens();
    this.determinants = this._tributesService.getDeterminants();
    this.subjectDeterminants = this._tributesService.getSubjectDeterminants();
  }

  addTribute(form: NgForm) {
    this._tributesService.addFromForm(form);
    this.router.navigate(['/']);
  }

  addToken(text: string) {
    this._tributesService.addToken({name: text});
  }

  addCalcToken(text: string) {
    this._tributesService.addCalcToken({name: text});
  }

  // addDeterminant(description: string, condition: string) {
  //   this._tributesService.addDeterminant({description: description, condition: condition})
  // }

  // addSubjectDeterminant(description: string, condition: string) {
  //   this._tributesService.addSubjectDeterminant({description: description, condition: condition})
  // }
}
