import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private _http: HttpClient) {}

  addCar(data: any): Observable<number> {
    return this._http.post<number>('https://localhost:7263/api/cars', data);
  }

  updateCar(id: number, data: any): Observable<any> {
    return this._http.put(`https://localhost:7263/api/cars/${id}`, data);
  }

  getCarList(): Observable<any> {
    return this._http.get('https://localhost:7263/api/cars');
  }

  deleteCar(id: number): Observable<any> {
    return this._http.delete(`https://localhost:7263/api/cars/${id}`);
  }

  getCarById(id: number): Observable<any> {
    return this._http.get(`https://localhost:7263/api/cars/${id}`);
  }
}
