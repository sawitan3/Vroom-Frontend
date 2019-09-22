import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarListResponse} from '../model/CarListResponse';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {AddCarRequest} from '../model/AddCarRequest';
import {Car} from '../model/Car';
import {EditCarRequest} from '../model/EditCarRequest';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = `${environment.baseUrl}/cars`;

  public getCars(): Observable<CarListResponse> {
    return this.httpClient.get(this.baseUrl)
      .pipe(map((x: any) =>
          ({cars: x.data.map((y: Car) => {y.image_path = `data:image/jpeg;base64,${y.image_path}`; return y; })}))
      );
  }

  public deleteCar(id: number) {
    const url = this.createIdUrl(id);
    return this.httpClient.delete(url);
  }

  public createCar(req: AddCarRequest) {
    return this.httpClient.post(this.baseUrl, this.convertToFormData(req));
  }

  public getCar(id: number): Observable<Car> {
    const url = this.createIdUrl(id);
    return this.httpClient.get(url).pipe(map((x: any) => x.data[0]));
  }

  public editCar(id: number, payload: EditCarRequest) {
    const url = this.createIdUrl(id);
    return this.httpClient.post(url, this.generateEditPayload(payload));
  }

  private createIdUrl(id: number): string {
    return `${this.baseUrl}/${id}`;
  }

  private generateEditPayload(input: EditCarRequest): FormData {
    const data = this.convertToFormData(input);
    data.append('_method', 'PUT');
    return data;
  }

  private convertToFormData(input: any): FormData {
    const res = new FormData();
    for (const key in input) {
      if (input.hasOwnProperty(key)) {
        res.append(key, input[key]);
      }
    }
    return res;
  }
}
