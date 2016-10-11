import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TributesComponent } from './tributes/tributes.component';
import { TributesListComponent } from './tributes/tributes-list.component';
import { TributeFormComponent } from './tributes/tribute-form.component';

import { TributesService } from './shared/TributesService'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TributesComponent,
    TributesListComponent,
    TributeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TributesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
