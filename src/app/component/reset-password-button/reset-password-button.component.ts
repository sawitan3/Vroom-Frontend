import { Component, OnInit } from '@angular/core';
import {RoutingService} from '../../services/routing.service';
import {Route} from '../../model/routes';

@Component({
  selector: 'app-reset-password-button',
  templateUrl: './reset-password-button.component.html',
  styleUrls: ['./reset-password-button.component.css']
})
export class ResetPasswordButtonComponent implements OnInit {

  constructor(private router: RoutingService) { }

  ngOnInit() {
  }

  reset() {
    this.router.goTo(Route.StartResetPassword);
  }
}
