import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';
import {RoutingService} from '../../services/routing.service';
import {Route} from '../../model/routes';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input()
  customerDetail: Customer;

  constructor(private router: RoutingService) { }

  ngOnInit() {
  }

  goBack() {
    this.router.goTo(Route.List);
  }

}
