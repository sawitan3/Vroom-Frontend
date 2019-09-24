import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AddBookingRequest} from '../model/AddBookingRequest';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  createBooking(payload: AddBookingRequest): Observable<unknown> {
    const url = `${environment.baseUrl}/bookings`;
    return this.httpClient.post(url, payload);
  }
}
