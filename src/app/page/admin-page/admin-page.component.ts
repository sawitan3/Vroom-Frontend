import { Component, OnInit } from '@angular/core';
import {Status} from '../../services/customer.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public status = Status;

  constructor() { }

  ngOnInit() {
  }

}
