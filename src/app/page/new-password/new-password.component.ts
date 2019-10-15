import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  token: string;
  email: string;

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentRoute.queryParams.subscribe(res => {
      this.token = res.token;
      this.email = res.email;
    });
  }

}
