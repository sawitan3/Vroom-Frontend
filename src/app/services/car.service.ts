import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarListResponse} from '../model/CarListResponse';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = `${environment.baseUrl}/cars`;

  public getCars(): Observable<CarListResponse> {
    return this.httpClient.get(this.baseUrl)
      .pipe(map((x: any) => ({cars: x.data}))
      );
  }

  public deleteCar(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url);
  }
}
