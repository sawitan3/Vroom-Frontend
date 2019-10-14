import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {RoutingService} from '../services/routing.service';
import {Route} from '../model/routes';

@Injectable({
  providedIn: 'root'
})
export class NewPasswordGuard implements CanActivate {

  constructor(private routing: RoutingService) {}

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return 'token' in next.queryParams ? true : this.routing.goTo(Route.Home);
  }
}
