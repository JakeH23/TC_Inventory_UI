import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CarAddComponent } from 'src/app/pages/car-add/car-add.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(
        private _dialog: MatDialog,
        private router: Router
    ) { }

    ngOnInit() {
    }

    openAddEditCarForm() {
        const dialogRef = this._dialog.open(CarAddComponent, {
            width: "100%"
        });
        dialogRef.afterClosed().subscribe({
            next: (val) => {
                if (val) {
                    this.router.navigate([`/cars/${val}`]);
                }
            },
        });
    }
}