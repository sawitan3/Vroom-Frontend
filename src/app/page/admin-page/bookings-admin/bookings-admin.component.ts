import { Component, OnInit } from '@angular/core';
import {Booking} from '../../../model/Booking';
import {AdminBookingService} from '../../../services/admin-booking.service';

@Component({
  selector: 'app-bookings-admin',
  templateUrl: './bookings-admin.component.html',
  styleUrls: ['./bookings-admin.component.css']
})
export class BookingsAdminComponent implements OnInit {

  bookings: Booking[];

  constructor(private adminBookingService: AdminBookingService) { }

  ngOnInit() {
    this.adminBookingService.getBookings().subscribe(res => {
      this.bookings = res.bookings;
    });
  }

}
