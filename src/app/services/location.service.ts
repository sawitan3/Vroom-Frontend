import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocationListResponse} from '../model/LocationListResponse';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {hasOwnProperty} from 'tslint/lib/utils';
import {AddLocationRequest} from '../model/AddLocationRequest';
import {Location} from '../model/Location';
import {EditLocationRequest} from '../model/EditLocationRequest';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl = `${environment.baseUrl}/locations`;

  constructor(private httpClient: HttpClient) { }

  public getLocations(): Observable<LocationListResponse> {
    return this.httpClient.get(this.baseUrl)
      .pipe(map((x: any) => ({locations: x.data})));
  }

  private createIdUrl(id: number): string {
    return `${this.baseUrl}/${id}`;
  }

  public deleteLocation(id: number) {
    const url = this.createIdUrl(id);
    return this.httpClient.delete(url);
  }

  public createLocation(req: AddLocationRequest) {
    const locationJson = JSON.stringify(req);
    return this.httpClient.post(this.baseUrl, locationJson, httpOptions);
  }

  public getLocation(id: number): Observable<Location> {
    const url = this.createIdUrl(id);
    return this.httpClient.get(url).pipe(map((x: any) => x.data));
  }

  public editLocation(id: number, payload: EditLocationRequest) {
    const locationJson = JSON.stringify(payload);
    const url = this.createIdUrl(id);
    return this.httpClient.patch(url, locationJson, httpOptions);
  }

  public getLocationGeoCode(address: string): Observable<any> {
    console.log('Getting address: ', address);
    const geoCoder = new google.maps.Geocoder();
    return Observable.create(observer => {geoCoder.geocode({ 'address': address }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          return {lat, lng};
        } else {
          console.log('Error: ', results, ' & Status: ', status);
          observer.error();
        }
      });
    });
  }
}
