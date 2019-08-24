import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CustomerListResponse} from '../model/CustomerListResponse';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  public getCustomers(status: Status = Status.All): Observable<CustomerListResponse> {
    const url = `https://powerful-sea-28932.herokuapp.com/api/${this.getURL(status)}`;
    return this.httpClient.get(url)
        .pipe(map((x: any) => ({customers: x.data})));
  }

  private getURL(status: Status) {
    switch (status) {
      case Status.Active:
        return 'users/customers/active';
      case Status.All:
        return 'customers';
      case Status.Inactive:
        return 'users/customers/inactive';
    }
  }
}

export enum Status {
  All,
  Active,
  Inactive
}
