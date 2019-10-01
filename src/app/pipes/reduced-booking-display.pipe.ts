import { Pipe, PipeTransform } from '@angular/core';
import {Booking} from '../model/Booking';

@Pipe({
  name: 'reducedBookingDisplay'
})
export class ReducedBookingDisplayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const booking = value as Booking;
    return `booking for ${booking.plate}`;
  }

}
