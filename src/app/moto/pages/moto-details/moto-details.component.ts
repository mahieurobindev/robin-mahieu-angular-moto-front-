import { Component, OnInit } from '@angular/core';
import { MotoFormData } from './../../../core/models/motoFormData';
import { MotoFormComponent } from './../../components/moto-form/moto-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MotoService } from 'src/app/services/moto.service';
import { Observable } from 'rxjs';
import { Moto } from 'src/app/core/models/moto';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
@Component({
  selector: 'app-moto-details',
  templateUrl: './moto-details.component.html',
  styleUrls: ['./moto-details.component.scss'],
})
export class MotoDetailsComponent implements OnInit {
  moto$: Observable<Moto> | undefined;
  constructor(
    private _motoService: MotoService,
    private _activatedRoute: ActivatedRoute,
    public _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.fetchData(params['id']);
    });
  }

  fetchData(id: number) {
    this.moto$ = this._motoService.getById(id);
  }

  updateMoto(moto: Moto) {
    const motoFormData: MotoFormData = {
      isUpdateMode: true,
      motoToUpdate: moto,
    };

    const dialogRef = this._dialog.open(MotoFormComponent, {
      data: motoFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchData(result);
      }
    });
  }

  goBack() {
    this._location.back();
  }
}
