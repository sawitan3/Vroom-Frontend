import { Component, OnInit } from '@angular/core';
import {BookingHistoryResponse} from '../../model/BookingHistoryResponse';
import {BookingHistoryService} from '../../services/booking-history.service';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-booking-history-page',
  templateUrl: './booking-history-page.component.html',
  styleUrls: ['./booking-history-page.component.css']
})
export class BookingHistoryPageComponent implements OnInit {

  public bookings: Array<BookingHistoryResponse>;

  constructor(private bookingHistoryService: BookingHistoryService,
              private storageService: StorageService) { }

  ngOnInit() {
    const customerId = this.storageService.getItem('id');
    this.bookingHistoryService.getCustomerBookingHistory(customerId).subscribe(res => {
      this.bookings = res.bookings;
    });
  }

}
