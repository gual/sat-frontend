import { Component, OnInit } from '@angular/core';

import { Property } from '../property';
import { PropertyService } from '../../shared/PropertyService';

@Component({
  selector: 'sf-property-list',
  templateUrl: './property-list.component.html',
  styles: []
})
export class PropertyListComponent implements OnInit {
  properties: any[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyService.getAll()
    .subscribe(
      data => {
        console.log(data);
        for (let key in data){
          data[key].id = key
          this.properties.push(data[key]);
        }
      }
    );
  }

}
