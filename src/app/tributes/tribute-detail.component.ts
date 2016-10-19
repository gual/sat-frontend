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

  constructor(private tributesService: TributesService, currentRoute: ActivatedRoute) {
    this.tributesService.getTribute(currentRoute.snapshot.params['id']).subscribe(
      (data => this.selectedTribute = data)
    )
  }

  ngOnInit() {
  }

}
