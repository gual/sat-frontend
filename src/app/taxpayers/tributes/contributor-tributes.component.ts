import { Component, Input, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { TributesService } from '../../shared/TributesService';

@Component({
  selector: 'sf-contributor-tributes',
  templateUrl: './contributor-tributes.component.html',
  styles: []
})
export class ContributorTributesComponent implements OnInit {
  @Input() contributorService: any;
  @Input() contributorId: number;

  tributes: any[] = []
  contributor: any;
  selectedTribute: any = null;

  constructor(private tributesService: TributesService) {
              // private propertyService: PropertyService,
              // private currentRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.contributorService.get(this.contributorId).subscribe((data => this.contributor = data));

    this.tributesService.getAll()
    .subscribe(
      data => {
        for (let key in data) {
          this.tributes.push(data[key]);
        }
      }
    );

  }

  associateTribute() {
    this.contributorService.associateTribute(this.contributor.id, this.selectedTribute.id).subscribe(
      (resp: Response) => {
        this.contributor = resp.json();
      }
    );
  }

  disassociateTribute(tributeId:number) {
    this.contributorService.disassociateTribute(this.contributor.id, tributeId).subscribe(
      (resp: Response) => {
        this.contributor = resp.json();
      }
    );
  }

}
