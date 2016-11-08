import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Tribute } from './tribute';
import { TributesService } from '../shared/TributesService';

@Component({
  selector: 'sf-tribute-detail',
  templateUrl: './tribute-detail.component.html',
  styles: []
})
export class TributeDetailComponent implements OnInit {
  selectedTribute: any;

  constructor(private tributesService: TributesService, private currentRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.tributesService.getTribute(this.currentRoute.snapshot.params['id']).subscribe(
      (tribData) => {
        this.selectedTribute = tribData
        this.tributesService.getTaxableIncome(tribData.taxable_income_id).subscribe(
          (taxIncData) => {
            console.log(taxIncData);
            this.selectedTribute.taxable_income = taxIncData;
            this.tributesService.getRate(tribData.rate_id).subscribe(
              (rateData) => {
                console.log(rateData);
                this.selectedTribute.rate = rateData;
              }
            );
          }
        );
      }
    );
  }

}
