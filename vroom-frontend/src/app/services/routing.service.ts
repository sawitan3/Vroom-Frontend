import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Route} from '../model/routes';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) { }

  public goTo(route: Route) {
    return this.router.navigateByUrl(route);
  }
}

