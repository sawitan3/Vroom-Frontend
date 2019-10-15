import { Component, OnInit } from '@angular/core';
import {BookingHistoryResponse} from '../../../model/BookingHistoryResponse';
import {BookingHistoryService} from '../../../services/booking-history.service';

@Component({
  selector: 'app-booking-histories',
  templateUrl: './booking-histories.component.html',
  styleUrls: ['./booking-histories.component.css']
})
export class BookingHistoriesComponent implements OnInit {

  bookings: BookingHistoryResponse[];

  constructor(private bookingHistoryService: BookingHistoryService) { }

  ngOnInit() {
    this.bookingHistoryService.getBookingHistories().subscribe(res => {
      this.bookings = res.bookings;
    });
  }

}
