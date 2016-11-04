import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TributesComponent } from './tributes/tributes.component';
import { TributesListComponent } from './tributes/tributes-list.component';
import { TributeFormComponent } from './tributes/tribute-form.component';
import { TributesService } from './shared/TributesService';
import { TributesSearchComponent } from './tributes/tributes-search/tributes-search.component';
import { TributeDetailComponent } from './tributes/tribute-detail.component';
import { PropertyComponent } from './taxpayers/property/property.component';
import { PropertySearchComponent } from './taxpayers/property/property-search.component';
import { PropertyListComponent } from './taxpayers/property/property-list.component';
import { PropertyFormComponent } from './taxpayers/property/property-form.component'
import { PropertyService } from './shared/PropertyService';
import { EstablishmentComponent } from './taxpayers/establishment/establishment.component';
import { EstablishmentSearchComponent } from './taxpayers/establishment/establishment-search.component';
import { EstablishmentListComponent } from './taxpayers/establishment/establishment-list.component';
import { EstablishmentFormComponent } from './taxpayers/establishment/establishment-form.component';
import { EstablishmentService } from './shared/EstablishmentService';
import { DeclarationComponent } from './declaration/declaration.component';
import { ContributorTributesComponent } from './taxpayers/tributes/contributor-tributes.component';
import { PropertyTributesComponent } from './taxpayers/property/property-tributes.component';
import { EstablishmentTributesComponent } from './taxpayers/establishment/establishment-tributes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TributesComponent,
    TributesListComponent,
    TributeFormComponent,
    TributesSearchComponent,
    TributeDetailComponent,
    PropertyComponent,
    PropertySearchComponent,
    PropertyListComponent,
    PropertyFormComponent,
    EstablishmentComponent,
    EstablishmentSearchComponent,
    EstablishmentListComponent,
    EstablishmentFormComponent,
    DeclarationComponent,
    TributesComponent,
    ContributorTributesComponent,
    PropertyTributesComponent,
    EstablishmentTributesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [TributesService, PropertyService, EstablishmentService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private _tributesService: TributesService) { }

}
