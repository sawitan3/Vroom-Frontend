import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {RegisterData} from '../model/RegisterData';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = `${environment.baseUrl}/customers`;

  constructor(private http: HttpClient) { }

  addUser(user: RegisterData): Observable<RegisterData> {
    const userJson = JSON.stringify(user);
    console.log(userJson);
    return this.http.post<RegisterData>(this.baseUrl, userJson, httpOptions);
  }
}


