import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {RoutingService} from '../services/routing.service';
import {StorageService} from '../services/storage.service';
import {Role} from '../model/role';
import {Route} from '../model/routes';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: RoutingService, private storage: StorageService) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.storage.getItem('role') === Role.Admin ? true : this.router.goTo(Route.Home);
  }
}
