import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../../services/location.service';
import {Location} from '../../../model/Location';
import {Observable} from 'rxjs';
// @ts-ignore
import {} from '@types/googlemaps';

@Component({
  selector: 'app-locations-admin',
  templateUrl: './locations-admin.component.html',
  styleUrls: ['./locations-admin.component.css']
})
export class LocationsAdminComponent implements OnInit {

  locations: Location[];
  latitude: number;
  longitude: number;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe(res => {
      this.locations = res.locations;
    });
  }

  delete(id) {
    const location = this.findLocation(id);
    const deleteConfirmation = confirm(`Are you sure you want to delete location ${location.address}?`);
    if(deleteConfirmation) {
      this.locationService.deleteLocation(id).subscribe(res => {
        window.location.reload();
      });
    }
  }

  findLocation(id) {
    return this.locations.find(x => x.id === id);
  }

  // getLocation(address: string) {
  //   console.log('Getting address: ', address);
  //   const geoCoder = new google.maps.Geocoder();
  //   return Observable.create(observer => {geoCoder.geocode({ 'address': address }, (results, status) => {
  //       if (status == google.maps.GeocoderStatus.OK) {
  //         const lat = results[0].geometry.location.lat();
  //         console.log('Latitude:' + lat);
  //       } else {
  //         console.log('Error: ', results, ' & Status: ', status);
  //         observer.error();
  //       }
  //     });
  //   });
  // }

  getLocation(address: string) {
    this.locationService.getLocationGeoCode(address).subscribe(res => {
      this.latitude = res[0];
      this.longitude = res[1];
    });
    if (this.latitude != null && this.longitude != null){
      console.log('Latitude: ' + this.latitude + ', Longitude: ' + this.longitude);
    }
  }

}
