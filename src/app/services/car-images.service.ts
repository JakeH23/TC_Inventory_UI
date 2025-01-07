import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../components/carousel/carousel.interface';

@Injectable({
  providedIn: 'root',
})
export class CarImagesService {
  constructor(private _http: HttpClient) {}

  getRandomCarImages(): Observable<CarImage[]> {
    return this._http.get<CarImage[]>('https://localhost:7263/api/CarImages');
  }

  uploadCarImage(data: FormData): Observable<CarImage> {
    return this._http.post<CarImage>('https://localhost:7263/api/CarImages', data);
  }
}
