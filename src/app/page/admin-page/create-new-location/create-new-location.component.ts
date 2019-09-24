import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddLocationRequest} from '../../../model/AddLocationRequest';
import {LocationService} from '../../../services/location.service';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-create-new-location',
  templateUrl: './create-new-location.component.html',
  styleUrls: ['./create-new-location.component.css']
})
export class CreateNewLocationComponent implements OnInit {

  @ViewChild('placesRef') placesRef: GooglePlaceDirective;

  createNewLocationForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    slot: new FormControl(1, [Validators.required, Validators.min(1)])
  });

  get address() {return this.createNewLocationForm.get('address'); }
  get slot() {return this.createNewLocationForm.get('slot'); }

  constructor(private locationService: LocationService) { }

  ngOnInit() {
  }

  submit() {
    const payload: AddLocationRequest = {address: this.address.value, latitude: 0, longitude: 0,
      slot: this.slot.value, current_car_num: 0};
    console.log(payload);
    this.locationService.createLocation(payload).subscribe(res =>
      window.location.reload(), err => console.log(err));
  }

  handleAddressChange(address: Address) {
    this.createNewLocationForm.get('address').setValue(address.formatted_address);
  }

}
