import { Component, OnInit } from '@angular/core';
import {LocationService} from '../../../services/location.service';
import {Location} from '../../../model/Location';
// @ts-ignore
import {} from '@types/googlemaps';
import {ModalService} from '../../../services/modal.service';
import {EditLocationComponent} from '../edit-location/edit-location.component';
import {MapCoordinates} from '../../../model/MapCoordinates';
declare let L;

@Component({
  selector: 'app-locations-admin',
  templateUrl: './locations-admin.component.html',
  styleUrls: ['./locations-admin.component.css']
})
export class LocationsAdminComponent implements OnInit {

  locations: Location[];
  mapCoordinates: MapCoordinates[];
  latitude: number[];
  longitude: number[];
  coordinates = [];

  constructor(private locationService: LocationService,
              private modalService: ModalService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe(res => {
      this.locations = res.locations;

      this.latitude = res.locations.map(({latitude}) => latitude);
      this.longitude = res.locations.map(({longitude}) => longitude);


      for (let i = 0; i < this.locations.length; i++) {
        this.coordinates.push([this.latitude[i], this.longitude[i]]);
      }

      console.log(this.coordinates);

      this.initializeMaps();
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

  edit(id) {
    const compInput = {locationId: id};
    this.modalService.open(EditLocationComponent, 'Edit Location', compInput);
  }

  findLocation(id) {
    return this.locations.find(x => x.id === id);
  }

  initializeMaps() {
    const map = L.map('mapId').setView([-37.8104234, 144.9607266], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoic2Fyc3UiLCJhIjoiY2swdnljcjBiMDlxejNlcGY3endtaTJlYiJ9.NFfBqwPkWJopMmKo-zscAA'
    }).addTo(map);

    let marker;

    for (const coordinate of this.coordinates) {
      marker = new L.marker(coordinate).addTo(map);
    }
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
    if (this.latitude != null && this.longitude != null) {
      console.log('Latitude: ' + this.latitude + ', Longitude: ' + this.longitude);
    }
  }

}
