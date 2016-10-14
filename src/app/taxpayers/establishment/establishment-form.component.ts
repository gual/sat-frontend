import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { EstablishmentService } from '../../shared/EstablishmentService';

@Component({
  selector: 'sf-establishment-form',
  templateUrl: './establishment-form.component.html',
  styles: []
})
export class EstablishmentFormComponent implements OnInit {

  constructor(private establishmentService: EstablishmentService, private router: Router) {
  }

  ngOnInit() {
  }

  addEstablishment(form: NgForm) {
    this.establishmentService.addFromForm(form);
    this.router.navigate(['/taxpayers/establishments']);
  }

}
