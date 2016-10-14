import { Routes, RouterModule } from '@angular/router';

import { TributesComponent } from './tributes/tributes.component';
import { TributeFormComponent } from './tributes/tribute-form.component';
import { TributeDetailComponent } from './tributes/tribute-detail.component';

const APP_ROUTES: Routes = [
    { path: 'tributes/new', component: TributeFormComponent },
    { path: 'tributes/detail/:id', component: TributeDetailComponent },
    { path: '', component: TributesComponent} ,
];

export const routing = RouterModule.forRoot(APP_ROUTES);