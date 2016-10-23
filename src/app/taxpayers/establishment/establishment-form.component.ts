import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { EstablishmentService } from '../../shared/EstablishmentService';

@Component({
  selector: 'sf-establishment-form',
  templateUrl: './establishment-form.component.html',
  styles: []
})
export class EstablishmentFormComponent implements OnInit {
  establishmentForm: FormGroup;

  constructor(
    private establishmentService: EstablishmentService,
    private router: Router,
    private formBuilder: FormBuilder) {

    this.establishmentForm = formBuilder.group({
      'code': [],
      'type': [],
      'designation': [],
      'abbreviation': [],
      'name': [],
      'activity': [],
      'province': [],
      'city': [],
      'registrationDate': [],
      'assets': [],
      'nit': [],
      'nrc': [],
      'startDate': [],
      'ownType': [],
      'ownName': [],
      'ownNit': []
    });
  }

  ngOnInit() {
  }

  addEstablishment() {
    this.establishmentService.add(this.establishmentForm.value).subscribe(
      (resp: Response) => console.log(resp.json())
    );
    this.router.navigate(['/taxpayers/establishments']);
  }

}
