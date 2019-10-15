import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Route} from '../model/routes';
import {Role} from '../model/role';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router,
              private location: Location) { }

  public goTo(route: Route) {
    return this.router.navigateByUrl(route);
  }

  public go(route: Route, queryParams: {[key: string]: unknown}) {
    return this.router.navigate([route], {queryParams});
  }

  public back() {
    this.location.back();
  }

  public redirectAfterLogin(role: Role) {
    switch (role) {
      case Role.SuperAdmin:
        this.goTo(Route.SuperAdmin);
        break;
      case Role.Admin:
        this.goTo(Route.Admin);
        break;
      case Role.Customer:
        this.goTo(Route.List);
        break;
    }
  }
}

