import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StatsService } from '../../services/stats.service';
import { CarImage } from '../../components/carousel/carousel.interface';
import { CarImagesService } from '../../services/car-images.service';

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
    this.getTotalCarsCount();
    this.getTotalCarsValue();
    this.getMostExpensiveCars();
    this.getBoxedTotal();
    this.getUnBoxedTotal();
    this.getRandomCarImages();
  }

  getTotalCarsCount() {
    this._statsService.getTotalCarsCount().subscribe({
      next: (res) => {
        this.totalCarsCount = res; 
      },
      error: console.log,
    });
  }

  getTotalCarsValue() {
    this._statsService.getTotalCarsValue().subscribe({
      next: (res) => {
        this.totalCarsValue = res; 
      },
      error: console.log,
    });
  }

  getBoxedTotal() {
    this._statsService.getBoxedTotal().subscribe({
      next: (res) => {
        this.boxedTotal = res; 
      },
      error: console.log,
    });
  }

  getUnBoxedTotal() {
    this._statsService.getUnboxedTotal().subscribe({
      next: (res) => {
        this.unboxedTotal = res; 
      },
      error: console.log,
    });
  }  

  getMostExpensiveCars() {
    this._statsService.getMostExpensiveCars().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
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
