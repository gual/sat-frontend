import { Routes, RouterModule } from '@angular/router';

import { TributesComponent } from './tributes/tributes.component';
import { TributeFormComponent } from './tributes/tribute-form.component';
import { TributeDetailComponent } from './tributes/tribute-detail.component';

import { PropertyComponent } from './taxpayers/property/property.component';
import { PropertyFormComponent } from './taxpayers/property/property-form.component';

import { EstablishmentComponent } from './taxpayers/establishment/establishment.component';
import { EstablishmentFormComponent } from './taxpayers/establishment/establishment-form.component';

import { DeclarationComponent } from './declaration/declaration.component';

const APP_ROUTES: Routes = [
    { path: 'properties/new', component: PropertyFormComponent },
    { path: 'properties', component: PropertyComponent },
    { path: 'establishments/new', component: EstablishmentFormComponent },
    { path: 'establishments', component: EstablishmentComponent },
    { path: 'tributes/new', component: TributeFormComponent },
    { path: 'tributes/detail/:id', component: TributeDetailComponent },
    { path: 'declaration', component: DeclarationComponent },
    { path: '', component: TributesComponent} ,
];

export const routing = RouterModule.forRoot(APP_ROUTES);