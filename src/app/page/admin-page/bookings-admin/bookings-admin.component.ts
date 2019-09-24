import { Component, OnInit } from '@angular/core';
import {Booking} from '../../../model/Booking';
import {AdminBookingService} from '../../../services/admin-booking.service';
import {ModalService} from '../../../services/modal.service';
import {AdminBookingDetailsComponent} from '../admin-booking-details/admin-booking-details.component';

@Component({
  selector: 'app-bookings-admin',
  templateUrl: './bookings-admin.component.html',
  styleUrls: ['./bookings-admin.component.css']
})
export class BookingsAdminComponent implements OnInit {

  bookings: Booking[];

  constructor(private adminBookingService: AdminBookingService,
              private modalService: ModalService) { }

  ngOnInit() {
    this.adminBookingService.getBookings().subscribe(res => {
      this.bookings = res.bookings;
    });
  }

  details(booking: Booking) {
    const input = {booking};
    this.modalService.open(AdminBookingDetailsComponent, 'Booking Details', input);
  }

}
