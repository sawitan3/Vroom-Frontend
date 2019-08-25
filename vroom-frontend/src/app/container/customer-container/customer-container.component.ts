import { Component, OnInit } from '@angular/core';
import {Status} from '../../services/customer.service';

@Component({
  selector: 'app-customer-container',
  templateUrl: './customer-container.component.html',
  styleUrls: ['./customer-container.component.css']
})
export class CustomerContainerComponent implements OnInit {

  public status = Status;

  constructor() { }

  ngOnInit() {
  }

}
