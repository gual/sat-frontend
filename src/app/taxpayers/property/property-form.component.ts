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
        'coordinate_x': [],
        'coordinate_y': [],
        'zone': [],
        'sector': [],
        'block': [],
        'lot': [],
        'cnr_sector': [],
        'cnr_plot': [],
        'nature': [],
        'type': [],
        'lighting': [],
        'electricity_company': [],
        'nic': [],
        'total_area': [],
        'constructed_area': [],
        'floors': [],
        'course': [],
        'linear_meters': [],
        'location': [],
        'construction_qa': [],
        'avg_rent': [],
        'person': formBuilder.group({
          'name': [],
          'other_names': [],
          'code': [],
          'surname': [],
          'other_surnames': [],
          'dui': [],
          'nit': [],
          'birthdate': [],
        })
      });
    }

  ngOnInit() {
  }

  addProperty() {
    this.propertyService.add(this.propertyForm.value).subscribe(
      (resp: Response) => console.log(resp.json())
    );
    this.router.navigate(['/properties']);
  }

}
