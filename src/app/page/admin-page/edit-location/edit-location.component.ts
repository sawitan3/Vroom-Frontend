import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LocationService} from '../../../services/location.service';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {EditLocationRequest} from '../../../model/EditLocationRequest';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {

  @Input()
  locationId: number;

  @ViewChild('placesRef') placesRef: GooglePlaceDirective;

  coordinate: string;
  current_car_num: number;

  editLocationForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    slot: new FormControl(1, [Validators.required, Validators.min(1)])
  });

  get address() {return this.editLocationForm.get('address'); }
  get slot() {return this.editLocationForm.get('slot'); }

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocation(this.locationId).subscribe(res => {
      console.log(res);
      this.editLocationForm.patchValue({
        address: res.address,
        slot: res.slot
      });
      this.coordinate = res.coordinate;
      this.current_car_num = res.current_car_num;
    });
  }

  handleAddressChange(address: Address) {
    this.editLocationForm.get('address').setValue(address.formatted_address);
  }

  // add the change coordinate later
  submit() {
    const payload: EditLocationRequest = {address: this.address.value, coordinate: this.coordinate,
      slot: this.slot.value, current_car_num: this.current_car_num};
    this.locationService.editLocation(this.locationId, payload).subscribe(res => window.location.reload(),
        err => console.error(err));
  }

}
