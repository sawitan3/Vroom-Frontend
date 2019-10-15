import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../services/car.service';
import {LocationService} from '../../services/location.service';
import {StorageService} from '../../services/storage.service';
import {Car} from '../../model/Car';
import {Location} from '../../model/Location';
import {map} from 'rxjs/operators';
import {AddBookingRequest} from '../../model/AddBookingRequest';
import {DatetimeService} from '../../services/datetime.service';
import {BookingService} from '../../services/booking.service';
import {ModalService} from '../../services/modal.service';
import {RoutingService} from '../../services/routing.service';
import {Route} from '../../model/routes';
import {PaymentService} from '../../services/payment.service';
import {LatlngConvertPipe} from '../../pipes/latlng-convert.pipe';

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

  error: any = null;

  coordinates: Array<unknown>;

  bookingForm = new FormGroup({
    returnLocation: new FormControl('', [Validators.required]),
    beginTime: new FormControl('', [Validators.required]),
    returnTime: new FormControl('', [Validators.required])
  });

  constructor(private carService: CarService,
              private locationService: LocationService,
              private storageService: StorageService,
              private datetimeService: DatetimeService,
              private bookingService: BookingService,
              private modalService: ModalService,
              private routingService: RoutingService,
              private transformer: LatlngConvertPipe) { }

  ngOnInit() {
    const currentCar = this.carService.getCar(this.carId).toPromise();
    const locationList = this.locationService.getLocations().pipe(map(x => x.locations)).toPromise();
    this.customerId = this.storageService.getItem('customerId');
    Promise.all([currentCar, locationList])
        .then(res => [this.currentCar, this.locations] = res)
        .then(() => {
          this.coordinates = this.locations.map(a => this.transformer.transform(a));
        })
        .then(() => {
          this.bookingForm.patchValue({
            returnLocation: this.locations[0].id
          });
        });
    this.bookingForm.patchValue({beginTime: this.datetimeService.getInitialData(), returnTime: this.datetimeService.getInitialData()});
  }

  onDateTimeChange(event: string, variableName: string) {
    this.bookingForm.patchValue({[variableName]: event});
  }

  onSubmit() {
    const payload: AddBookingRequest = {
      customer_id: this.customerId,
      car_id: this.carId,
      return_location_id: this.bookingForm.get('returnLocation').value,
      begin_time: this.bookingForm.get('beginTime').value,
      return_time: this.bookingForm.get('returnTime').value
    };
    this.bookingService.createBooking(payload).subscribe(res => {
      this.routingService.go(Route.Payment, {bookingId: res.id});
    }, err => this.error = err.error.error1);
  }

}
