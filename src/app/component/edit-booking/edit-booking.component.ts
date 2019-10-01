import {Component, Input, OnInit} from '@angular/core';
import {BookingService} from '../../services/booking.service';
import {EditBookingRequest} from '../../model/EditBookingRequest';
import {LocationService} from '../../services/location.service';
import {map} from 'rxjs/operators';
import {Booking} from '../../model/Booking';
import {Location} from '../../model/Location';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatetimeService} from '../../services/datetime.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {

  @Input()
  bookingId: number;


  locations: Location[];

  isLoading: boolean;

  error: any = null;

  returnTime: string;
  beginTime: string;

  bookingForm = new FormGroup({
    returnLocation: new FormControl('', [Validators.required]),
    beginTime: new FormControl('', [Validators.required]),
    returnTime: new FormControl('', [Validators.required])
  });

  constructor(private bookingService: BookingService,
              private locationService: LocationService) { }

  ngOnInit() {
    this.isLoading = true;
    Promise.all([this.bookingService.getBooking(this.bookingId).toPromise(),
      this.locationService.getLocations().pipe(map(res => res.locations.filter(x => x.slot > x.current_car_num))).toPromise()])
        .then(result => {
          this.isLoading = false;
          const [booking, locations] = result;
          this.locations = locations;
          this.beginTime = booking.begin_time;
          this.returnTime = booking.return_time;
          this.bookingForm.patchValue({returnLocation: booking.return_location_id,
            returnTime: booking.return_time,
            beginTime: booking.begin_time
          });
        });
  }

  onDateTimeChange(event: string, variableName: string) {
    this.bookingForm.patchValue({[variableName]: event});
  }

  onSubmit() {
    const payload: EditBookingRequest = {
      return_location_id: this.bookingForm.get('returnLocation').value,
      begin_time: this.bookingForm.get('beginTime').value,
      return_time: this.bookingForm.get('returnTime').value
    };
    this.bookingService.editBooking(payload, this.bookingId).subscribe(() => window.location.reload(),
            err => this.error = err.error.error1);
  }

}
