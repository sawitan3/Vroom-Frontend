import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {LoginRequest} from '../../model/LoginRequest';
import {LoginResponse} from '../../model/LoginResponse';
import {HttpErrorResponse} from '@angular/common/http';
import {StorageService} from '../../services/storage.service';
import {RoutingService} from '../../services/routing.service';
import {Route} from '../../model/routes';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorMessage = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService,
              private storageService: StorageService,
              private routingService: RoutingService) { }

  ngOnInit() {
  }

  submit() {
    const req: LoginRequest = {email: this.loginForm.get('email').value, password: this.loginForm.get('password').value};
    this.authService.login(req).subscribe(
        (res: LoginResponse) => this.handleSuccess(res),
        (err: HttpErrorResponse) => this.handleError(err.status));
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  private handleError(status) {
    if (status === 401) {
      this.errorMessage = 'Incorrect Username/Password.';
    } else if (status === 500) {
      this.errorMessage = 'Please try again later';
    }
  }

  private handleSuccess(res: LoginResponse) {
    this.storageService.setItem('token', res.token);
    this.storageService.setItem('role', res.role);
    this.storageService.setItem('isLoggedIn', true);
    if (res.customer_id) {
      this.storageService.setItem('customerId', res.customer_id);
      this.storageService.setItem('id', res.user_id);
    } else {
      this.storageService.setItem('id', res.id);
    }
    this.routingService.redirectAfterLogin(res.role);
  }

  register() {
    this.routingService.goTo(Route.Register);
  }
}
