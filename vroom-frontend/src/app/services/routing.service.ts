import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Route} from '../model/routes';
import {Role} from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) { }

  public goTo(route: Route) {
    return this.router.navigateByUrl(route);
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

