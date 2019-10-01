import {Component, Input, OnInit} from '@angular/core';
import {Booking} from '../../model/Booking';
import {ModalService} from '../../services/modal.service';
import {EditBookingComponent} from '../edit-booking/edit-booking.component';
import {BookingService} from '../../services/booking.service';
import {DeleteBookingComponent} from '../delete-booking/delete-booking.component';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  @Input()
  bookings: Array<Booking>;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  edit(id: number) {
    this.modalService.open(EditBookingComponent, `Edit booking`, {bookingId: id});
  }

  delete(id: number) {
    this.modalService.open(DeleteBookingComponent, `Delete booking`, {bookingId: id});
  }

}
