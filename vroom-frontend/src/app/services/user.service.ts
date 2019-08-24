import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AdminListResponse, AdminResponse} from '../model/AdminListResponse';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {LoginResponse} from '../model/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public getList(): Observable<AdminListResponse> {
    return this.httpClient.get('https://powerful-sea-28932.herokuapp.com/api/users')
        .pipe(map((x: any) => ({admins: x.data})));
  }
}
