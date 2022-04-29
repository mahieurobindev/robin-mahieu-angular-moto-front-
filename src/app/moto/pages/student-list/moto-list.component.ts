import { Moto } from '../../../core/models/moto';
import { max, Observable, of } from 'rxjs';
import { MotoService } from '../../services/moto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MotoFormComponent } from '../../components/moto-form/moto-form.component';
import { MotoFormData } from 'src/app/core/models/motoFormData';

@Component({
  selector: 'app-moto-list',
  templateUrl: './moto-list.component.html',
  styleUrls: ['./moto-list.component.scss'],
})
export class MotoListComponent implements OnInit {
  motos$: Observable<Moto[]>;
  displayedColumns: string[] = ['id', 'Marque', 'Modele'];

  //Bidouille
  ids: number[] = [];

  constructor(
    private _motoService: MotoService,
    private _router: Router,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.motos$ = this._motoService.get();
  }

  showMotoDetails(moto: Moto) {
    this._router.navigateByUrl('/motos/' + moto.id);
  }

  createMoto() {
    const motoFormData: MotoFormData = {
      isUpdateMode: false,
      idToCreate: Math.max(...this.ids) + 1,
    };

    const dialogRef = this._dialog.open(MotoFormComponent, {
      data: motoFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.fetchData();
    });
  }

  setId(id: number) {
    //Bidouille
    this.ids.push(id);
  }
}
