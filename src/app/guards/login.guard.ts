import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {RoutingService} from '../services/routing.service';
import {StorageService} from '../services/storage.service';
import {Route} from '../model/routes';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private routing: RoutingService, private storage: StorageService) {}
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !this.storage.getItem('isLoggedIn') ? true : this.routing.goTo(Route.Home);
  }
}
