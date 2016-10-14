import { Component, OnInit, Input } from '@angular/core';
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
  determinants: Determinant[] = [];

  constructor(private _tributesService: TributesService) { }

  ngOnInit() {
    this.tokens = this._tributesService.getTokens();
    this.determinants = this._tributesService.getDeterminants();
  }

  addTribute(form: NgForm) {
    this._tributesService.addFromForm(form);
  }

  addToken(text: string) {
    this._tributesService.addToken({name: text});
  }

  addDeterminant(description: string, condition: string) {
    this._tributesService.addDeterminant({description: description, condition: condition})
  }
}
