import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookingListResponse} from '../model/BookingListResponse';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminBookingService {

  private url = `${environment.baseUrl}/bookings`;

  constructor(private httpClient: HttpClient) { }

  public getBookings(): Observable<BookingListResponse> {
    return this.httpClient.get(this.url)
      .pipe(map((x: any) => ({bookings: x.data})));
  }
}
