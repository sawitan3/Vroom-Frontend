import {Component, Input, OnInit} from '@angular/core';
import {Booking} from '../../../model/Booking';

@Component({
  selector: 'app-admin-booking-details',
  templateUrl: './admin-booking-details.component.html',
  styleUrls: ['./admin-booking-details.component.css']
})
export class AdminBookingDetailsComponent implements OnInit {

  @Input()
  booking: Booking;

  constructor() { }

  ngOnInit() {
  }
}
