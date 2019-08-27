import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AdminListResponse, AdminResponse} from '../model/AdminListResponse';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {LoginResponse} from '../model/LoginResponse';
import {AdminRegisterRequest} from '../model/AdminRegisterRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = `${environment.baseUrl}/users`;

  constructor(private httpClient: HttpClient) { }

  public getList(): Observable<AdminListResponse> {
    return this.httpClient.get(this.url)
        .pipe(map((x: any) => ({admins: x.data})));
  }

  public createAdmin(payload: AdminRegisterRequest) {
    return this.httpClient.post(this.url, payload).pipe(map((x: any) => x.data));
  }
}
