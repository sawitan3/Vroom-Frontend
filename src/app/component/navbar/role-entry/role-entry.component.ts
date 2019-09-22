import { Component, OnInit } from '@angular/core';
import {Route} from '../../../model/routes';
import {RoutingService} from '../../../services/routing.service';
import {StorageService} from '../../../services/storage.service';
import {Role} from '../../../model/role';

@Component({
  selector: 'app-role-entry',
  templateUrl: './role-entry.component.html',
  styleUrls: ['./role-entry.component.css']
})
export class RoleEntryComponent implements OnInit {
  public route = Route;
  public roles = Role;
  public role: Role;

  constructor(private router: RoutingService, private storage: StorageService) { }

  ngOnInit() {
    this.role = this.storage.getItem('role');
    this.storage.watchStorage().subscribe(() => {
      this.role = this.storage.getItem('role');
    });
  }

  linkClick(route: Route) {
    this.router.goTo(route);
  }

}
