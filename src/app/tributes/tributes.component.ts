import { Component, OnInit } from '@angular/core';
import { Tribute } from './tribute';

@Component({
  selector: 'sf-tributes',
  templateUrl: './tributes.component.html',
})
export class TributesComponent implements OnInit {
  // tribute: Tribute = {name: "Nuevo tributo", law: "ley de origen", taxable: 0}

  constructor() { }

  ngOnInit() {
  }
}
