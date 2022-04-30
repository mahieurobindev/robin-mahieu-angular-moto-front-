import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotoFormComponent } from './moto/components/moto-form/moto-form.component';
import { MotoDetailsComponent } from './moto/pages/moto-details/moto-details.component';
import { MotoListComponent } from './moto/pages/moto-list/moto-list.component';
import { Moto } from './moto./moto..component';
import { MotoComponent } from './moto/moto.component';

@NgModule({
  declarations: [
    AppComponent,
    MotoFormComponent,
    MotoDetailsComponent,
    MotoListComponent,
    Moto.Component,
    MotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
