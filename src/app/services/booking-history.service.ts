import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BookingHistoryListResponse} from '../model/BookingHistoryListResponse';
import {BookingHistoryResponse} from '../model/BookingHistoryResponse';
import {BookingHistoryRequest} from '../model/BookingHistoryRequest';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
    return this.httpClient.get(`${this.baseUrl}/history/${customerId}`).pipe(map(
      (x: any) => ({bookings: x.data}) as BookingHistoryListResponse)
    );
  }

  createBookingHistory(payload: BookingHistoryRequest): Observable<unknown> {
    const payloadJson = JSON.stringify(payload);
    return this.httpClient.post<BookingHistoryRequest>(`${this.baseUrl}/histories`, payload);
  }
}
