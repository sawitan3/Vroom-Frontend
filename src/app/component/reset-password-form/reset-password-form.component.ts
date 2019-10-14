import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {validatePasswordMatch} from '../../validators/password-match';
import {ResetPasswordService} from '../../services/reset-password.service';
import {NewPasswordRequest} from '../../model/NewPasswordRequest';
import {RoutingService} from '../../services/routing.service';
import {Route} from '../../model/routes';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css']
})
export class ResetPasswordFormComponent implements OnInit {

  @Input()
  token: string;

  @Input()
  email: string;

  message = '';

  newPasswordForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirm: new FormControl('', [Validators.required])
  }, [validatePasswordMatch()]);

  constructor(private controller: ResetPasswordService,
              private router: RoutingService) { }

  ngOnInit() {
  }

  get password() {
    return this.newPasswordForm.get('password');
  }

  get confirm() {
    return this.newPasswordForm.get('confirm');
  }

  submit() {
    const payload: NewPasswordRequest = {email: this.email,
      password: this.password.value,
      token: this.token,
      password_confirmation: this.confirm.value
    };
    this.controller.reset(payload).subscribe(() => {
      this.message = 'Password reset successful. Redirecting to login page in 5 seconds';
      setTimeout(() => this.router.goTo(Route.Login), 5000);
    }, err => {
      this.message = err.error.message;
    });
  }
}
