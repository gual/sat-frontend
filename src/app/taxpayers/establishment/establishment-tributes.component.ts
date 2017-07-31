import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EstablishmentService } from '../../shared/EstablishmentService';

@Component({
  selector: 'sf-establishment-tributes',
  template: `
            <sf-contributor-tributes
              [contributorService]="establishmentService"
              [contributorId]="establishmentId">
            </sf-contributor-tributes>
            `
})
export class EstablishmentTributesComponent implements OnInit {
  establishmentId : number;

  constructor(public establishmentService: EstablishmentService, private currentRoute: ActivatedRoute) {
    this.establishmentId = currentRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
