import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient) { }

  getTotalCarsCount(): Observable<number> {
    return this._http.get<number>(`${this.baseUrl}/api/Statistics/GetTotalCarsCount`);
  }

  getTotalCarsValue(): Observable<number> {
    return this._http.get<number>(`${this.baseUrl}/api/Statistics/GetTotalCarsValue`);
  }

  getBoxedTotal(): Observable<number> {
    return this._http.get<number>(`${this.baseUrl}/api/Statistics/GetBoxedTotal`);
  }

  getUnboxedTotal(): Observable<number> {
    return this._http.get<number>(`${this.baseUrl}/api/Statistics/GetUnboxedTotal`);
  }

  getMostExpensiveCars(): Observable<any> {
    return this._http.get(`${this.baseUrl}/api/Statistics/GetMostExpensiveCars`);
  }
}
