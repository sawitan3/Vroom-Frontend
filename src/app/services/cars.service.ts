import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CarListResponse} from '../model/CarListResponse';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private baseUrl = `${environment.baseUrl}/cars`;

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<CarListResponse> {
    return this.httpClient.get(this.baseUrl).pipe(map((x: any) => ({cars: x.data})));
  }

  public deleteCar(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url);
  }
}
