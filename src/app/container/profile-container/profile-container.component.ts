import {Component, Input, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {StorageService} from '../../services/storage.service';
import {Customer} from '../../model/Customer';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {

  @Input()
  customerId?: number;

  constructor(private customerService: CustomerService,
              private storageService: StorageService) { }

  customerDetails: Customer;

  ngOnInit() {
    const id = this.customerId || this.storageService.getItem('customerId');
    this.customerService.getCustomer(id).subscribe(res => this.customerDetails = res);
  }

}
