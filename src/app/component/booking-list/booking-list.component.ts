import {Component, Input, OnInit} from '@angular/core';
import {Booking} from '../../model/Booking';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  @Input()
  bookings: Array<Booking>;

  constructor() { }

  ngOnInit() {
  }

}
