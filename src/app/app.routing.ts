import { Routes, RouterModule } from '@angular/router';

import { TributesComponent } from './tributes/tributes.component';
import { TaxpayersComponent } from './taxpayers/taxpayers.component';

const APP_ROUTES: Routes = [
    { path: 'taxpayers', component: TaxpayersComponent} ,
    { path: '', component: TributesComponent} ,
];

export const routing = RouterModule.forRoot(APP_ROUTES);