import { NgForm } from '@angular/forms';

import { Establishment } from '../taxpayers/establishment';
import { Owner } from '../taxpayers/owner';
import { Company } from '../taxpayers/company';

let establishments: Establishment[] = [];

export class EstablishmentService{
  getAll() : Establishment[] {
    return establishments;
  }

  add(establishment: Establishment) {
      establishments.push(establishment);
      console.log(establishments);
  }

  addFromForm(form: NgForm) {
    let owner: Company = {nit: form.value.own_nit, socialReason: form.value.own_name};

    let establishment: Establishment =
      {name: form.value.name, code: form.value.code, address: form.value.address, owner, activity: form.value.activity}

    this.add(establishment);
  }
}
