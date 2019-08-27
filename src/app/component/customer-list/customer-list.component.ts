import {Component, Input, OnInit} from '@angular/core';
import {CustomerService, Status} from '../../services/customer.service';
import {Customer} from '../../model/Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @Input()
  status: Status;

  customers: Array<Customer>;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers(this.status).subscribe(res => {
      this.customers = res.customers;
    });
  }

  update(customerId: number) {
    return;
  }

}
