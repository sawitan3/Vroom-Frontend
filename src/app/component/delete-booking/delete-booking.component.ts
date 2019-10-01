import {Component, Input, OnInit} from '@angular/core';
import {Booking} from '../../model/Booking';
import {BookingService} from '../../services/booking.service';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent implements OnInit {

  @Input()
  bookingId: number;

  payload: Booking;
  isLoading = true;

  constructor(private bookingService: BookingService,
              private modalService: ModalService) { }

  ngOnInit() {
    this.bookingService.getBooking(this.bookingId).subscribe(res => {this.payload = res; this.isLoading = false; });
  }

  yes() {
    this.bookingService.deleteBooking(this.bookingId).subscribe(() => window.location.reload());
  }

  no() {
    this.modalService.close();
  }

}
