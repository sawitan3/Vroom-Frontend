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

declare let L;

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

  carLat: number;
  carLng: number;

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

          const carLocation = this.locations.findIndex(location => location.id === this.currentCar.location_id);
          this.carLat = this.locations[carLocation].latitude;
          this.carLng = this.locations[carLocation].longitude;
        });
    this.bookingForm.patchValue({beginTime: this.datetimeService.getInitialData(), returnTime: this.datetimeService.getInitialData()});

    this.initializeMaps();
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

  initializeMaps() {

    // Set map center, this should be set to where the car is.
    // It should be possible to declare the map outside this method. So you can use it universally.
    const map = L.map('mapId').setView([-37.8104234, 144.9607266], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoic2Fyc3UiLCJhIjoiY2swdnljcjBiMDlxejNlcGY3endtaTJlYiJ9.NFfBqwPkWJopMmKo-zscAA'
    }).addTo(map);

    // Add a marker to the map. If you want to add/change a coordinate of the marker, you can also use this.
    // let marker;
    //
    // marker = new L.marker([lat, lng]).addTo(map);
  }
}
