import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './pages/moto-details/moto-details.component';
import { StudentListComponent } from './pages/moto-list/moto-list.component';
import { StudentComponent } from './moto.component';

const routes: Routes = [
  {
    path: '',
    component : StudentComponent,
    children : [
      {
        path : '',
        component : StudentListComponent
      },
      {
        path : ':id',
        component : StudentDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
