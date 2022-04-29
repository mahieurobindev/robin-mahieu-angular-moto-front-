import { environment } from '../../../environments/environment';
import { Moto } from '../../core/models/moto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { max, Observable } from 'rxjs';

@Injectable()
export class MotoService {
  private readonly motoPath: string = '/motos';

  constructor(private _http: HttpClient) {}

  get(): Observable<Moto[]> {
    return this._http.get<Moto[]>(
      `${environment.apiBaseUrl}${this.motoPath}`
    );
  }

  getById(id: number): Observable<Moto> {
    return this._http.get<Moto>(
      `${environment.apiBaseUrl}${this.motoPath}/${id}`
    );
  }

  create(moto: Moto): Observable<string> {
    return this._http.post<string>(
      `${environment.apiBaseUrl}${this.motoPath}`,
      moto
    );
  }

  update(moto: Moto): Observable<string> {
    return this._http.put<string>(
      `${environment.apiBaseUrl}${this.motoPath}/${moto.id}`,
      moto
    );
  }

  delete(id: number): Observable<string> {
    return this._http.delete<string>(
      `${environment.apiBaseUrl}${this.motoPath}/${id}`
    );
  }
}
