import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';
import {RoutingService} from '../../services/routing.service';
import {Route} from '../../model/routes';
import {ModalService} from '../../services/modal.service';
import {EditProfileComponent} from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input()
  customerDetail: Customer;

  constructor(private router: RoutingService,
              private modal: ModalService) { }

  ngOnInit() {
  }

  goBack() {
    this.router.goTo(Route.List);
  }

  edit() {
    this.modal.open(EditProfileComponent, `Edit ${this.customerDetail.name}`, {customerId: this.customerDetail.id});
  }

}
