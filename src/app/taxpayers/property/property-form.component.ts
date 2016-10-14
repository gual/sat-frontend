import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { PropertyService } from '../../shared/PropertyService';

@Component({
  selector: 'sf-property-form',
  templateUrl: './property-form.component.html',
  styles: []
})
export class PropertyFormComponent implements OnInit {

  constructor(private propertyService: PropertyService, private router: Router) {
  }

  ngOnInit() {
  }

  addProperty(form: NgForm) {
    this.propertyService.addFromForm(form);
    this.router.navigate(['/taxpayers/properties']);
  }

}
