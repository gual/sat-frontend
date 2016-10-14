import { Component, OnInit } from '@angular/core';

import { Establishment } from '../establishment';
import { EstablishmentService } from '../../shared/EstablishmentService';

@Component({
  selector: 'sf-establishment-list',
  templateUrl: './establishment-list.component.html',
  styles: []
})
export class EstablishmentListComponent implements OnInit {
  establishments: Establishment[] = [];

  constructor(private establishmentService: EstablishmentService) {
    this.establishments = this.establishmentService.getAll();
  }

  ngOnInit() {
  }

}
