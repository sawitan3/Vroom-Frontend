import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResetPasswordService} from '../../services/reset-password.service';
import {RoutingService} from '../../services/routing.service';
import {Route} from '../../model/routes';
import {ResetPasswordRequest} from '../../model/ResetPasswordRequest';

@Component({
  selector: 'app-start-reset-password',
  templateUrl: './start-reset-password.component.html',
  styleUrls: ['./start-reset-password.component.css']
})
export class StartResetPasswordComponent implements OnInit {

  resetForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required])
  });

  message: string;

  constructor(private resetService: ResetPasswordService,
              private router: RoutingService) { }

  ngOnInit() {
  }

  cancel() {
    this.router.back();
  }

  submit() {
    const payload: ResetPasswordRequest = {email: this.email.value};
    this.resetService.start(payload).subscribe(
        () => this.message = 'Email containing your personalised reset link is sent. Please check your inbox.',
            err => this.message = err.error.message);
  }

  get email() {
    return this.resetForm.get('email');
  }

}
