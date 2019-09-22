import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {RoutingService} from '../../services/routing.service';
import {Route} from '../../model/routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public route = Route;

  isNavbarCollapsed = true;
  isLoggedIn: boolean;
  aCustomer: boolean | string;
  constructor(private router: RoutingService,
              private storage: StorageService) { }

  ngOnInit() {
    this.isLoggedIn = this.storage.getItem('isLoggedIn') || false;
    this.storage.watchStorage().subscribe(() => {
      this.isLoggedIn = this.storage.getItem('isLoggedIn') || false;
      this.aCustomer = this.storage.getItem('customerId') || false;
    });
    this.aCustomer = this.storage.getItem('customerId') || false;
  }

  linkClick(destination: Route) {
    this.router.goTo(destination);
    this.isNavbarCollapsed = true;
  }

  logout() {
    this.storage.clear();
    this.router.goTo(Route.Home);
  }
}
