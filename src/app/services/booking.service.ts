import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AddBookingRequest} from '../model/AddBookingRequest';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {BookingListResponse} from '../model/BookingListResponse';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseUrl = `${environment.baseUrl}/bookings`;

  constructor(private httpClient: HttpClient) { }

  createBooking(payload: AddBookingRequest): Observable<unknown> {
    return this.httpClient.post(this.baseUrl, payload);
  }

  getBookings(customerId: number): Observable<BookingListResponse> {
    const url = `${this.baseUrl}/customer/${customerId}`;
    return this.httpClient.get(url).pipe(map((x: any) => ({bookings: x.data} as BookingListResponse)));
  }
}
