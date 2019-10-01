import {Component, Input, OnInit} from '@angular/core';
import {Booking} from '../../model/Booking';
import {ModalService} from '../../services/modal.service';
import {EditBookingComponent} from '../edit-booking/edit-booking.component';
import {BookingService} from '../../services/booking.service';
import {DeleteBookingComponent} from '../delete-booking/delete-booking.component';
import {BookingDisplayPipe} from '../../pipes/booking-display.pipe';
import {ReducedBookingDisplayPipe} from '../../pipes/reduced-booking-display.pipe';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  @Input()
  bookings: Array<Booking>;

  constructor(private modalService: ModalService,
              private pipe: ReducedBookingDisplayPipe) { }

  ngOnInit() {
  }

  edit(booking: Booking) {
    this.modalService.open(EditBookingComponent, `Edit ${this.pipe.transform(booking)}`, {bookingId: booking.id});
  }

  delete(booking: Booking) {
    this.modalService.open(DeleteBookingComponent, `Delete ${this.pipe.transform(booking)}`, {bookingId: booking.id});
  }

}
