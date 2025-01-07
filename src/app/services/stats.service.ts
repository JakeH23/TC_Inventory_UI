import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  constructor(private _http: HttpClient) {}

  getTotalCarsCount(): Observable<number> {
    return this._http.get<number>('https://localhost:7263/api/Statistics/GetTotalCarsCount');
  }

  getTotalCarsValue(): Observable<number> {
    return this._http.get<number>(`https://localhost:7263/api/Statistics/GetTotalCarsValue`);
  }

  getBoxedTotal(): Observable<number> {
    return this._http.get<number>('https://localhost:7263/api/Statistics/GetBoxedTotal');
  }

  getUnboxedTotal(): Observable<number> {
    return this._http.get<number>(`https://localhost:7263/api/Statistics/GetUnboxedTotal`);
  }

  getMostExpensiveCars(): Observable<any> {
    return this._http.get(`https://localhost:7263/api/Statistics/GetMostExpensiveCars`);
  }
}
