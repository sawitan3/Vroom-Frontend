import {Component, EventEmitter, Input, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import {RegisterService} from '../../services/register.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CreditCardValidator} from 'angular-cc-library';
import {RegisterData} from '../model/RegisterData';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  address: object;
  establishmentAddress: object;

  formattedEstablishmentAddress: string;

  user: RegisterData = {name: '', email: '', password: '', role: 'customer', address: '', phone_number: 0, license_number: '',
    status: false, number: 0, exp_date: '', cc_name: ''};

  confirm = '';

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    license_number: new FormControl('', [Validators.required]),
    phone_number: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required, CreditCardValidator.validateCCNumber]),
    exp_date: new FormControl('', [Validators.required, CreditCardValidator.validateExpDate]),
    cc_name: new FormControl()
  });

  error: {message; type} = null;

  constructor(
    private registerService: RegisterService,
    private router: Router,
    public zone: NgZone
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const data: RegisterData = {name: this.registerForm.get('name').value, email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value, role: 'customer', address: this.registerForm.get('address').value,
      phone_number: this.registerForm.get('phone_number').value, license_number: this.registerForm.get('license_number').value,
      status: false, number: this.registerForm.get('number').value, exp_date: this.registerForm.get('exp_date').value,
      cc_name: this.registerForm.get('cc_name').value};
    this.registerService.addUser(data).subscribe((res) => {
      this.goHome();
    }, (err) => {
      this.onError(err);
    });
  }

  onError(error: HttpErrorResponse) {
    console.log(error);
    this.error = {type: '', message: ''};
    if (error.status === 422) {
      this.error.message = 'Username is already used.';
      this.error.type = 'info';
    } else if (error.status === 0 || error.status === 500 || error.status === 404) {
      this.error.message = 'Our server encountered a problem. Please try again.';
      this.error.type = 'info';
    }
  }

  getEstablishmentAddress(place: object) {
    this.establishmentAddress = place['formatted_address'];
    this.formattedEstablishmentAddress = place['formatted_address'];
    this.zone.run(() => {
      this.formattedEstablishmentAddress = place['formatted_address'];
    });
  }

  goHome(): void {
    this.router.navigate(['']);
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirm_password');
  }

  get expDate() {
    return this.registerForm.get('exp_date');
  }
}
