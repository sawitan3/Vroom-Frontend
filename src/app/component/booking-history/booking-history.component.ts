import {Component, Input, OnInit} from '@angular/core';
import {BookingHistoryResponse} from '../../model/BookingHistoryResponse';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  @Input()
  bookings: Array<BookingHistoryResponse>

  constructor() { }

  ngOnInit() {
  }

}
