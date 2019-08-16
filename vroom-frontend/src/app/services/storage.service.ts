import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageObservable = new Subject<boolean>();
  constructor() { }

  public watchStorage() {
    return this.storageObservable.asObservable();
  }

  public setItem(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
    this.storageObservable.next(true);
  }

  public getItem(key: string) {
    return JSON.parse(sessionStorage.getItem(key));
  }
}
