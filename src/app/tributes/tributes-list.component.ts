import { Component, OnInit } from '@angular/core';
import { Tribute } from './tribute';

@Component({
  selector: 'sf-tributes-list',
  templateUrl: './tributes-list.component.html',
})
export class TributesListComponent implements OnInit {
  tributes: Tribute[] = [
    {name: "Tributo 1", law: "Ley 1", taxable: 300},
    {name: "Tributo 2", law: "Ley 2", taxable: 200}
  ]

  constructor() { }

  ngOnInit() {
  }

}
