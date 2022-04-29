import { MotoService } from '../../services/moto.service';
import { Moto } from '../../../core/models/moto';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MotoFormData } from 'src/app/core/models/motoFormData';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-moto-form',
  templateUrl: './moto-form.component.html',
  styleUrls: ['./moto-form.component.scss'],
})
export class MotoFormComponent implements OnInit {
  isUpdateMode: boolean;
  motoForm: FormGroup;

  classes: string[] = ['LP-DIM-APP', 'LP-DIM-FI'];
  constructor(
    private _formBuilder: FormBuilder,
    private _motoService: MotoService,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<MotoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MotoFormData
  ) {
    this.isUpdateMode = this.data.isUpdateMode;
  }

  ngOnInit(): void {
    this.initFormBuilder();
  }

  initFormBuilder() {
    this.motoForm = this._formBuilder.group({
      id: [
        this.data.isUpdateMode
          ? this.data.motoToUpdate.id
          : this.data.idToCreate,
        Validators.required,
      ],
      firstName: [
        this.data.isUpdateMode ? this.data.motoToUpdate.firstName : '',
        Validators.required,
      ],
      lastName: [
        this.data.isUpdateMode ? this.data.motoToUpdate.lastName : '',
        Validators.required,
      ],
      class: [
        this.data.isUpdateMode ? this.data.motoToUpdate.class : '',
        Validators.required,
      ],
      dateOfBirth: [
        this.data.isUpdateMode ? this.data.motoToUpdate.dateOfBirth : '',
        Validators.required,
      ],
      email: [
        this.data.isUpdateMode ? this.data.motoToUpdate.email : '',
        [Validators.required, Validators.email],
      ],
    });
  }

  closeForm(id?: number) {
    this.motoForm.reset();
    this.dialogRef.close(id);
  }

  onSubmit(moto: Moto) {
    if (this.motoForm.valid) {
      if (this.data.isUpdateMode) {
        // update
        this._motoService.update(moto).subscribe((response) => {
          this.closeForm(moto.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      } else {
        // create
        this._motoService.create(moto).subscribe((response) => {
          this.closeForm(moto.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      }
    }
  }
}
