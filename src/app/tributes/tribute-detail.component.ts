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
  selectedTribute: Tribute;

  constructor(private tributesService: TributesService, currentRoute: ActivatedRoute) {
    this.selectedTribute = this.tributesService.getTribute(currentRoute.snapshot.params['id'])
  }

  ngOnInit() {
  }

}
