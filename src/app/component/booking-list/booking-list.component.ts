import {Component, Input, OnInit} from '@angular/core';
import {Booking} from '../../model/Booking';
import {ModalService} from '../../services/modal.service';
import {EditBookingComponent} from '../edit-booking/edit-booking.component';
import {DeleteBookingComponent} from '../delete-booking/delete-booking.component';
import {ReducedBookingDisplayPipe} from '../../pipes/reduced-booking-display.pipe';
import {BookingHistoryService} from '../../services/booking-history.service';
import {BookingHistoryRequest} from '../../model/BookingHistoryRequest';

import {Router} from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  @Input()
  bookings: Array<Booking>;

  constructor(private modalService: ModalService,
              private pipe: ReducedBookingDisplayPipe,
              private bookingHistoryService: BookingHistoryService,
              private router: Router) { }

  ngOnInit() {
  }

  edit(booking: Booking) {
    this.modalService.open(EditBookingComponent, `Edit ${this.pipe.transform(booking)}`, {bookingId: booking.id});
  }

  delete(booking: Booking) {
    this.modalService.open(DeleteBookingComponent, `Delete ${this.pipe.transform(booking)}`, {bookingId: booking.id});
  }

  return(bookingId: number) {
    const payload = new BookingHistoryRequest();
    const currDate = new Date();
    const dateString = `${currDate.getFullYear()}-${currDate.getMonth()}-${currDate.getDate()} ${currDate.getHours()}:${currDate.getMinutes()}:${currDate.getSeconds()}`;
    console.log(dateString);
    payload.booking_id = bookingId;
    payload.return_time = dateString;
    this.bookingHistoryService.createBookingHistory(payload).subscribe((res) => {
      alert('Return car success!');
      this.goHome();
    }, (err) => {
      alert(err);
      return;
    });
  }

  goHome(): void {
    this.router.navigate(['/history']);
  }
}
