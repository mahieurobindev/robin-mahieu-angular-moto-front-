import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotoDetailsComponent } from './pages/moto-details/moto-details.component';
import { MotoListComponent } from './pages/moto-list/moto-list.component';
import { MotoComponent } from './moto.component';

const routes: Routes = [
  {
    path: '',
    component : MotoComponent,
    children : [
      {
        path : '',
        component : MotoListComponent
      },
      {
        path : ':id',
        component : MotoDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotoRoutingModule { }
