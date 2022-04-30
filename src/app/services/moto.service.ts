import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { max, Observable } from 'rxjs';
import { Moto } from '../core/models/moto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MotoService {
  private readonly motoPath: string = '/motos';

  constructor(private _http: HttpClient) {}

  get(): Observable<Moto[]> {
    return this._http.get<Moto[]>(`${environment.apiBaseUrl}${this.motoPath}`);
  }

  getById(id: number): Observable<Moto> {
    return this._http.get<Moto>(
      `${environment.apiBaseUrl}${this.motoPath}/${id}`
    );
  }
}
