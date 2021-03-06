import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CustomerListResponse} from '../model/CustomerListResponse';
import { environment } from 'src/environments/environment.prod';
import {Customer} from '../model/Customer';
import {EditCustomerRequest} from '../model/EditCustomerRequest';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = `${environment.baseUrl}/`;

  constructor(private httpClient: HttpClient) { }

  public getCustomers(status: Status = Status.All): Observable<CustomerListResponse> {
    const url = `${this.url}${this.getURL(status)}`;
    return this.httpClient.get(url)
        .pipe(map((x: any) => ({customers: x.data})));
  }

  public getCustomer(id: number): Observable<Customer> {
    const url = `${this.url}customers/${id}`;
    return this.httpClient.get(url).pipe(map((x: any) => x.data[0] as Customer));
  }

  public toggleCustomer(id: number): Observable<any> {
    const url = `${this.url}users/activate/${id}`;
    return this.httpClient.put(url, null);
  }

  public updateCustomer(customerId: number, payload: EditCustomerRequest): Observable<unknown> {
    const url = `${this.url}customers/${customerId}`;
    return this.httpClient.put(url, payload);
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
