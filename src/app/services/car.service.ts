import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarListResponse} from '../model/CarListResponse';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  public getCars(): Observable<CarListResponse> {
    const baseUrl = `${environment.baseUrl}/cars`;
    return this.httpClient.get(baseUrl)
      .pipe(map((x: any) => ({cars: x.data})));
  }
}
