import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  carId: number;

  ngOnInit() {
    this.route.queryParams.subscribe(res => this.carId = +res.carId);
  }

}
