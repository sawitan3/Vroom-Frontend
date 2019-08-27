import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CustomerListResponse} from '../model/CustomerListResponse';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = `${environment.baseUrl}/api/`;

  constructor(private httpClient: HttpClient) { }

  public getCustomers(status: Status = Status.All): Observable<CustomerListResponse> {
    const url = `${this.url}${this.getURL(status)}`;
    return this.httpClient.get(url)
        .pipe(map((x: any) => ({customers: x.data})));
  }

  public toggleCustomer(id: number): Observable<any>{
    const url = `${this.url}users/activate/${id}`;
    return this.httpClient.put(url, null);
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
