import { NgForm } from '@angular/forms';

import { Property } from '../taxpayers/property';
import { Owner } from '../taxpayers/owner';
import { Company } from '../taxpayers/company';

let properties: Property[] = [];


export class PropertyService{
  getAll() : Property[] {
    return properties;
  }

  add(property: Property) {
      properties.push(property);
      console.log(properties);
  }

  addFromForm(form: NgForm) {
    let owner: Company = {nit: form.value.own_nit, socialReason: form.value.own_name};

    let property: Property = {code: form.value.code, address: form.value.address, owner}

    this.add(property);
  }
}
