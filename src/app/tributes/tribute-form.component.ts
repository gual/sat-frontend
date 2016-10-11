import { Component, OnInit, Input } from '@angular/core';
import { Tribute } from './tribute';
import { NgForm } from '@angular/forms';

import { TributesService } from '../shared/TributesService';

@Component({
  selector: 'sf-tribute-form',
  templateUrl: './tribute-form.component.html'
})
export class TributeFormComponent implements OnInit {

  constructor(private _tributesService: TributesService) { }

  ngOnInit() {
  }

  addTribute(form: NgForm) {
    this._tributesService.add({name: form.value.name, law: form.value.law, taxable: form.value.taxable})
  }
}
