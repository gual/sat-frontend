import { Component, OnInit } from '@angular/core';
import { Tribute } from './tribute';

import { TributesService } from '../shared/TributesService';

@Component({
  selector: 'sf-tributes-list',
  templateUrl: './tributes-list.component.html',
})
export class TributesListComponent implements OnInit {
  tributes: any[] = []

  constructor(private _tributesService: TributesService) {
    // this.tributes = _tributesService.getAll();
  }

  ngOnInit() {
    this._tributesService.getAll()
    .subscribe(
      data => {
        console.log(data);
        for (let key in data){
          this.tributes.push(data[key]);
        }
      }
    );
  }

}
