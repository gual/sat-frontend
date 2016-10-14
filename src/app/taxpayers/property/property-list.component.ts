import { Component, OnInit } from '@angular/core';

import { Property } from '../property';
import { PropertyService } from '../../shared/PropertyService';

@Component({
  selector: 'sf-property-list',
  templateUrl: './property-list.component.html',
  styles: []
})
export class PropertyListComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {
    this.properties = this.propertyService.getAll();
  }

  ngOnInit() {
  }

}
