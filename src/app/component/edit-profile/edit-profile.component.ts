import {Component, Input, OnInit} from '@angular/core';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import {ModalService} from '../../services/modal.service';
import {EditCustomerRequest} from '../../model/EditCustomerRequest';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  @Input()
  customerId: number;

  editForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    licenseNumber: new FormControl('', [Validators.required])}
  );

  message: any = null;

  constructor(private customerService: CustomerService,
              private modal: ModalService) { }

  ngOnInit() {
    this.customerService.getCustomer(this.customerId).subscribe(res => {
      this.editForm.patchValue({
        address: res.address,
        phoneNumber: res.phone_number,
        licenseNumber: res.license_number
      });
    });
  }

  public handleAddressChange(address: Address) {
    this.editForm.get('address').setValue(address.formatted_address);
  }

  get address() {
    return this.editForm.get('address');
  }

  get phoneNumber() {
    return this.editForm.get('phoneNumber');
  }

  get licenseNumber() {
    return this.editForm.get('licenseNumber');
  }

  onSubmit() {
    const payload: EditCustomerRequest = {address: this.address.value,
      license_number: this.licenseNumber.value,
      phone_number: this.phoneNumber.value};
    this.customerService.updateCustomer(this.customerId, payload).subscribe(res => {
      this.message = 'Update successful. Refreshing in 3 seconds.';
      setTimeout(() => window.location.reload(), 3000);
    }, err => {this.message = err; });
  }

  cancel() {
    this.modal.close();
  }

}
