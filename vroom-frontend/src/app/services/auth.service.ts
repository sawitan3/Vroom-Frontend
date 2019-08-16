import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequest} from '../model/LoginRequest';
import {map} from 'rxjs/operators';
import {LoginResponse} from '../model/LoginResponse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpClient) { }

  public login(req: LoginRequest): Observable<LoginResponse> {
    return this.httpService.post('https://powerful-sea-28932.herokuapp.com/api/auth/login', req)
        .pipe(map((x: any) => x.data as LoginResponse));
  }
}
