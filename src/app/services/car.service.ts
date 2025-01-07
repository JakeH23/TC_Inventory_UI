import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient) { }

  addCar(data: any): Observable<number> {
    return this._http.post<number>(`${this.baseUrl}/api/cars`, data);
  }

  updateCar(id: number, data: any): Observable<any> {
    return this._http.put(`${this.baseUrl}/api/cars/${id}`, data);
  }

  getCarList(): Observable<any> {
    return this._http.get(`${this.baseUrl}/api/cars`);
  }

  deleteCar(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/api/cars/${id}`);
  }

  getCarById(id: number): Observable<any> {
    return this._http.get(`${this.baseUrl}/api/cars/${id}`);
  }
}
