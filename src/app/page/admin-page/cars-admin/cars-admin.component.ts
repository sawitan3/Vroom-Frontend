import { Component, OnInit } from '@angular/core';
import {CarService} from '../../../services/car.service';
import {Car} from '../../../model/Car';
import {ModalService} from '../../../services/modal.service';
import {EditCarComponent} from '../edit-car/edit-car.component';

@Component({
  selector: 'app-cars-admin',
  templateUrl: './cars-admin.component.html',
  styleUrls: ['./cars-admin.component.css']
})
export class CarsAdminComponent implements OnInit {

  constructor(private carsService: CarService, private modalService: ModalService) { }

  cars: Car[];

  ngOnInit() {
    this.carsService.getCars().subscribe(res => {
      this.cars = res.cars;
      this.cars.sort((x, y) => x.id > y.id ? 1 : -1);
    });
  }

  delete(id) {
    const car = this.findCar(id);
    const deleteConfirmation = confirm(`Are you sure you want to delete car ${car.type}(${car.plate})?`);
    if (deleteConfirmation) {
      this.carsService.deleteCar(id).subscribe(res => {
        window.location.reload();
      });
    }
  }

  edit(id) {
    const compInput = {carId: id};
    this.modalService.open(EditCarComponent, `Edit car ${this.findCar(id).type}`, compInput);
  }

  findCar(id): Car {
    return this.cars.find(x => x.id === id);
  }

}
