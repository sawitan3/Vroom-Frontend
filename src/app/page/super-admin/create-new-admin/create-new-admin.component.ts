import {Component, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {AdminRegisterRequest} from '../../../model/AdminRegisterRequest';
import {Role} from '../../../model/role';
import { RoutingService } from 'src/app/services/routing.service';
import { Route } from 'src/app/model/routes';
import {HttpErrorResponse, HttpResponse, HttpResponseBase} from '@angular/common/http';

@Component({
  selector: 'app-create-new-admin',
  templateUrl: './create-new-admin.component.html',
  styleUrls: ['./create-new-admin.component.css']
})
export class CreateNewAdminComponent implements OnInit {

  message = '';
  isError: boolean;
  displayMessage = false;

  createNewAdminForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirm: new FormControl(''),
    name: new FormControl('', [Validators.required])
  }, {validators: this.ensurePasswordIdentical});

  get email() {
    return this.createNewAdminForm.get('email');
  }

  get password() {
    return this.createNewAdminForm.get('password');
  }

  get confirm() {
    return this.createNewAdminForm.get('confirm');
  }
  get name() {
      return this.createNewAdminForm.get('name');
  }

  private ensurePasswordIdentical(c: AbstractControl) {
    if (c.get('password').value !== c.get('confirm').value) {
      c.get('confirm').setErrors({passwordMismatch: true});
      return {passwordMismatch: true};
    }
    return null;
  }

  constructor(private userService: UserService,
              private routingService: RoutingService) { }

  ngOnInit() {
  }

  submit() {
    const payload: AdminRegisterRequest = {name: this.name.value,
      email: this.email.value, password: this.password.value,
    role: Role.Admin};
    this.userService.createAdmin(payload).subscribe((res) => {
      this.handleSuccess();
    }, (err: HttpErrorResponse) => this.handleError(err.status));
  }

  handleSuccess() {
    this.displayMessage = true;
    this.isError = false;
    this.message = 'Admin is successfully registered. Closing this window soon.';
    setTimeout(() => {window.location.reload()}, 1500);
  }

  handleError(error) {
    this.displayMessage = true;
    this.isError = true;
    if (error === 422) {
      this.message = 'Admin with same email is already registered';
    } else if (error > 500) {
      this.message = 'Please try again later.';
    }
  }

}
