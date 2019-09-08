import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocationListResponse} from '../model/LocationListResponse';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  public getLocations(): Observable<LocationListResponse> {
    const baseUrl = `${environment.baseUrl}/locations`;
    return this.httpClient.get(baseUrl)
      .pipe(map((x: any) => ({locations: x.data})));
  }
}
