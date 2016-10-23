import { Component, OnInit } from '@angular/core';

import { Establishment } from '../establishment';
import { EstablishmentService } from '../../shared/EstablishmentService';

@Component({
  selector: 'sf-establishment-list',
  templateUrl: './establishment-list.component.html',
  styles: []
})
export class EstablishmentListComponent implements OnInit {
  establishments: any[] = [];

  constructor(private establishmentService: EstablishmentService) {  }

  ngOnInit() {
    this.establishmentService.getAll()
    .subscribe(
      data => {
        console.log(data);
        for (let key in data){
          data[key].id = key
          this.establishments.push(data[key]);
        }
      }
    );
  }

}
