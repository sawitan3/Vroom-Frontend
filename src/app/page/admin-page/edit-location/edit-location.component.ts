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
  oldAddress: string;
  oldSlot: number;
  oldLat: number;
  oldLng: number;
  oldCarNum: number;

  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  editLocationForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    slot: new FormControl(1, [Validators.required, Validators.min(1)])
  });

  get address() {return this.editLocationForm.get('address'); }
  get slot() {return this.editLocationForm.get('slot'); }

  constructor(private locationService: LocationService) { }

  ngOnInit() {

    this.editLocationForm.patchValue({
      address: this.oldAddress,
      slot: this.oldSlot
    });
  }

  handleAddressChange(address: Address) {
    this.editLocationForm.get('address').setValue(address.formatted_address);
    this.oldLat = address.geometry.location.lat();
    this.oldLng = address.geometry.location.lng();
  }

  // add the change coordinate later
  submit() {
    const payload: EditLocationRequest = {address: this.address.value, latitude: this.oldLat, longitude: this.oldLng,
      slot: this.slot.value, current_car_num: this.oldCarNum};
    this.locationService.editLocation(this.locationId, payload).subscribe(res => window.location.reload(),
        err => console.error(err));
  }

}
