import { Component, OnInit } from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-payment-callback',
  templateUrl: './payment-callback.component.html',
  styleUrls: ['./payment-callback.component.css']
})
export class PaymentCallbackComponent implements OnInit {

  isSuccess: boolean;

  constructor(private snapshot: ActivatedRouteSnapshot) { }

  ngOnInit() {
    if (this.snapshot.queryParams.payment_status === 'VERIFIED'){
      this.isSuccess = true;
    } else {
      this.isSuccess = false;
    }
  }

}
