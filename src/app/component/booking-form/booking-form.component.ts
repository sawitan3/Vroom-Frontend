import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../services/car.service';
import {LocationService} from '../../services/location.service';
import {StorageService} from '../../services/storage.service';
import {Car} from '../../model/Car';
import {Location} from '../../model/Location';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  @Input()
  carId: number;

  customerId: number;

  currentCar: Car;
  locations: Array<Location>;

  bookingForm = new FormGroup({
    returnLocation: new FormControl('', [Validators.required]),
    beginTime: new FormControl('', [Validators.required]),
    returnTime: new FormControl('', [Validators.required])
  });

  constructor(private carService: CarService,
              private locationService: LocationService,
              private storageService: StorageService) { }

  ngOnInit() {
    const currentCar = this.carService.getCar(this.carId).toPromise();
    const locationList = this.locationService.getLocations().pipe(map(x => x.locations)).toPromise();
    this.customerId = this.storageService.getItem('customerId');
    Promise.all([currentCar, locationList])
        .then(res => [this.currentCar, this.locations] = res)
        .then(() => {
          this.bookingForm.patchValue({
            returnLocation: this.locations[0].id
          });
        });
  }

}
