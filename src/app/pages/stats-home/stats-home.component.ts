import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StatsService } from '../../services/stats.service';
import { CarImage } from '../../components/carousel/carousel.interface';
import { CarImagesService } from '../../services/car-images.service';
import { AllStatistics } from 'src/app/models/AllStatistics';

@Component({
  selector: 'stats-home',
  templateUrl: './stats-home.component.html',
  styleUrls: ['./stats-home.component.scss'],
})
export class StatsHomeComponent implements OnInit {
  cars: CarImage[] = [];

  totalCarsCount: number = 0;
  totalCarsValue: number = 0;
  boxedTotal: number = 0;
  unboxedTotal: number = 0;
  displayedColumns: string[] = [
    'make',
    'model',
    'manufacturersCode',
    'estimatedValue',
  ];
  dataSource!: MatTableDataSource<any>; 
  
  
  constructor(
    private _statsService: StatsService,
    private _carImagesService: CarImagesService
  ) {}

  ngOnInit(): void {
    this.getAllStatistics();
    this.getRandomCarImages();
  }

  getAllStatistics() {
    this._statsService.getAllStatistics().subscribe({
      next: (res: AllStatistics) => {
        this.totalCarsCount = res.totalCarsCount; 
        this.totalCarsValue = res.totalCarsValue; 
        this.boxedTotal = res.boxedTotal; 
        this.unboxedTotal = res.unboxedTotal; 
        this.dataSource = new MatTableDataSource(res.mostExpensiveCars);
      },
      error: console.log,
    });
  }

  getRandomCarImages() {
    this._carImagesService.getRandomCarImages().subscribe({
      next: (res) => {
        this.cars = res;
      },
      error: console.log,
    });
  } 
}
