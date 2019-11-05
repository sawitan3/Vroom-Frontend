import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../../services/location.service';
import {Location} from '../../../model/Location';
import {ModalService} from '../../../services/modal.service';
import {EditLocationComponent} from '../edit-location/edit-location.component';
import {MapCoordinates} from '../../../model/MapCoordinates';
import {Observable} from 'rxjs';
import {LatlngConvertPipe} from '../../../pipes/latlng-convert.pipe';
declare let L;

@Component({
  selector: 'app-locations-admin',
  templateUrl: './locations-admin.component.html',
  styleUrls: ['./locations-admin.component.css']
})
export class LocationsAdminComponent implements OnInit {

  locations: Location[];
  coordinates = [];

  constructor(private locationService: LocationService,
              private modalService: ModalService,
              private transform: LatlngConvertPipe) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe(res => {
      this.locations = res.locations;

      this.coordinates = res.locations.map(a => this.transform.transform(a));

      console.log(this.coordinates);
    });
  }

  delete(id) {
    const location = this.findLocation(id);
    const deleteConfirmation = confirm(`Are you sure you want to delete location ${location.address}?`);
    if (deleteConfirmation) {
      this.locationService.deleteLocation(id).subscribe(res => {
        window.location.reload();
      });
    }
  }

  edit(id, address, slot, lat, lng, carNum) {
    const compInput = {locationId: id, oldAddress: address, oldSlot: slot, oldLat: lat, oldLng: lng, oldCarNum: carNum};
    this.modalService.open(EditLocationComponent, 'Edit Location', compInput);
  }

  findLocation(id) {
    return this.locations.find(x => x.id === id);
  }

}
