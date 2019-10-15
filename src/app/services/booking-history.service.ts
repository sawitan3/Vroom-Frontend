import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BookingHistoryListResponse} from '../model/BookingHistoryListResponse';
import {BookingHistoryResponse} from '../model/BookingHistoryResponse';

@Injectable({
  providedIn: 'root'
})
export class BookingHistoryService {

  baseUrl = `${environment.baseUrl}`;

  constructor(private httpClient: HttpClient) { }

  getBookingHistories(): Observable<BookingHistoryListResponse> {
    return this.httpClient.get(`${this.baseUrl}/histories`).pipe(map((x: any) => ({bookings: x.data}) as BookingHistoryListResponse));
  }

  getCustomerBookingHistory(customerId: number): Observable<BookingHistoryListResponse> {
    return this.httpClient.get(`${this.baseUrl}/history/${customerId}`).pipe(map((x: any) => ({bookings: x.data}) as BookingHistoryListResponse));
  }


}
