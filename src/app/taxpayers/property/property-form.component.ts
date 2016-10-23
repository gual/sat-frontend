import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Response } from '@angular/http';

import { PropertyService } from '../../shared/PropertyService';

@Component({
  selector: 'sf-property-form',
  templateUrl: './property-form.component.html',
  styles: []
})
export class PropertyFormComponent implements OnInit {
  propertyForm: FormGroup;

  constructor(
    private propertyService: PropertyService,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.propertyForm = formBuilder.group({
        'code': [],
        'address': [],
        'coordinateX': [],
        'coordinateY': [],
        'zone': [],
        'sector': [],
        'block': [],
        'lot': [],
        'cnrSector': [],
        'cnrPlot': [],
        'nature': [],
        'type': [],
        'lighting': [],
        'electricityCompany': [],
        'nic': [],
        'totalArea': [],
        'constructedArea': [],
        'floors': [],
        'course': [],
        'linearMeters': [],
        'location': [],
        'constructionQa': [],
        'avgRent': [],
        'ownType': [],
        'ownName': [],
        'ownNit': []
      });
    }

  ngOnInit() {
  }

  addProperty() {
    this.propertyService.add(this.propertyForm.value).subscribe(
      (resp: Response) => console.log(resp.json())
    );
    this.router.navigate(['/taxpayers/properties']);
  }

}
