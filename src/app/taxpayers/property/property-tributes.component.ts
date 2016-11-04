import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PropertyService } from '../../shared/PropertyService';

@Component({
  selector: 'sf-property-tributes',
  template: `
            <sf-contributor-tributes
              [contributorService]="propertyService"
              [contributorId]="propertyId">
            </sf-contributor-tributes>
            `
})
export class PropertyTributesComponent implements OnInit {
  propertyId : number;

  constructor(private propertyService: PropertyService, private currentRoute: ActivatedRoute) {
    this.propertyId = currentRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
