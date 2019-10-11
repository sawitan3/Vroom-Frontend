import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-payment-screen',
  templateUrl: './payment-screen.component.html',
  styleUrls: ['./payment-screen.component.css']
})
export class PaymentScreenComponent implements OnInit {

  bookingId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.bookingId = params.bookingId;
    });
  }

}
