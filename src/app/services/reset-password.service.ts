import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResetPasswordRequest} from '../model/ResetPasswordRequest';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {NewPasswordRequest} from '../model/NewPasswordRequest';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private http: HttpClient) { }

  start(payload: ResetPasswordRequest): Observable<unknown> {
    return this.http.post(`${environment.baseUrl}/password/create`, payload);
  }

  reset(payload: NewPasswordRequest): Observable<unknown> {
    return this.http.post(`${environment.baseUrl}/password/reset`, payload);
  }
}
