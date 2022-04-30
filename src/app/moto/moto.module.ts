import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotoRoutingModule } from './moto-routing.module';
import { MotoComponent } from './moto.component';
import { MotoListComponent } from './pages/moto-list/moto-list.component';
import { MotoDetailsComponent } from './pages/moto-details/moto-details.component';
import { MotoFormComponent } from './components/moto-form/moto-form.component';
import { HttpClientModule } from '@angular/common/http';
//import { MotoService } from './services/moto.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    MotoComponent,
    MotoListComponent,
    MotoDetailsComponent,
    MotoFormComponent,
  ],
  imports: [
    CommonModule,
    MotoRoutingModule,
    SharedModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
})
export class MotoModule {}
