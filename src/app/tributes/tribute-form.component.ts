import { Component, OnInit, Input } from '@angular/core';
import { Tribute } from './tribute';

@Component({
  selector: 'sf-tribute-form',
  templateUrl: './tribute-form.component.html'
})
export class TributeFormComponent implements OnInit {
  @Input() tribute: Tribute;

  constructor() { }

  ngOnInit() {
  }

}
