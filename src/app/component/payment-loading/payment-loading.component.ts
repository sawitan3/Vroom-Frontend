import {Component, Input, OnInit, Output} from '@angular/core';
import {PaymentService} from '../../services/payment.service';

@Component({
  selector: 'app-payment-loading',
  templateUrl: './payment-loading.component.html',
  styleUrls: ['./payment-loading.component.css']
})
export class PaymentLoadingComponent implements OnInit {

  @Input()
  bookingId: number;

  isLoading = true;

  constructor(private payment: PaymentService) { }

  ngOnInit() {
    this.payment.pay(this.bookingId);
  }

}
