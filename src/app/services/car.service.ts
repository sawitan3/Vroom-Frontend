import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarListResponse} from '../model/CarListResponse';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {AddCarRequest} from '../model/AddCarRequest';
import {hasOwnProperty} from 'tslint/lib/utils';
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
      .pipe(map((x: any) => ({cars: x.data}))
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
    return this.httpClient.patch(url, this.convertToFormData(payload));
  }

  private createIdUrl(id: number): string {
    return `${this.baseUrl}/${id}`;
  }

  private convertToFormData(input: any): FormData {
    const res = new FormData();
    for (const key in input) {
      if (hasOwnProperty(input, key)) {
        res.append(key, input[key]);
      }
    }
    return res;
  }
}
