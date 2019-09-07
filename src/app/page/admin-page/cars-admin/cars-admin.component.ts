import { Component, OnInit } from '@angular/core';
import {CarService} from '../../../services/car.service';
import {Car} from '../../../model/Car';

@Component({
  selector: 'app-cars-admin',
  templateUrl: './cars-admin.component.html',
  styleUrls: ['./cars-admin.component.css']
})
export class CarsAdminComponent implements OnInit {

  constructor(private carsService: CarService) { }

  cars: Car[];

  ngOnInit() {
    this.carsService.getCars().subscribe(res => {
      this.cars = res.cars;
      this.cars.sort((x, y) => x.id > y.id ? 1 : -1);
    });
  }

  delete(id) {
    const car = this.cars.find(x => x.id === id);
    const deleteConfirmation = confirm(`Are you sure you want to delete car ${car.type}(${car.plate})?`);
    if (deleteConfirmation) {
      this.carsService.deleteCar(id).subscribe(res => {
        window.location.reload();
      });
    }
  }

}
