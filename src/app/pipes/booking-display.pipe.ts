import { Pipe, PipeTransform } from '@angular/core';
import {Booking} from '../model/Booking';

@Pipe({
  name: 'bookingDisplay'
})
export class BookingDisplayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const booking = value as Booking;
    return `booking for ${booking.plate} from ${booking.begin_time} to ${booking.return_time}`;
  }

}
