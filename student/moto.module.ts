import { StudentService } from './services/student.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StudentComponent } from './moto.component';
import { StudentListComponent } from './pages/moto-list/moto-list.component';
import { StudentDetailsComponent } from './pages/moto-details/moto-details.component';
import { StudentFormComponent } from './components/moto-form/moto-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    StudentComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentFormComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [StudentService, MatDatepickerModule, MatNativeDateModule],
})
export class StudentModule {}
