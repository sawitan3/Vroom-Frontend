import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequest} from '../model/LoginRequest';
import {map} from 'rxjs/operators';
import {LoginResponse} from '../model/LoginResponse';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpClient) { }

  public login(req: LoginRequest): Observable<LoginResponse> {
    return this.httpService.post(`${environment.baseUrl}/auth/login`, req)
        .pipe(map((x: any) => x.data as LoginResponse));
  }
}
