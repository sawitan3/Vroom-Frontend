import { Component, OnInit } from '@angular/core';
import {BookingService} from '../../services/booking.service';
import {Booking} from '../../model/Booking';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent implements OnInit {

  public bookings: Array<Booking>;

  constructor(private bookingService: BookingService,
              private storageService: StorageService) { }

  ngOnInit() {
    const customerId = this.storageService.getItem('customerId');
    this.bookingService.getBookings(customerId).subscribe(res => {console.log(res); this.bookings = res.bookings});
  }

}
