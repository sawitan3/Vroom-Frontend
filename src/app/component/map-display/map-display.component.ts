import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {icon, LatLngExpression, marker, tileLayer} from 'leaflet';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css']
})
export class MapDisplayComponent implements OnInit, OnChanges {

  @Input()
  coordinates: Array<unknown>;

  options;

  layers;

  constructor() { }

  async ngOnInit() {
    this.options = {layers: [tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoic2Fyc3UiLCJhIjoiY2swdnljcjBiMDlxejNlcGY3endtaTJlYiJ9.NFfBqwPkWJopMmKo-zscAA'
      })],
    center: [-37.8104234, 144.9607266],
    zoom: 13};
  }

  ngOnChanges(): void {
    if (this.coordinates) {
      this.layers = this.coordinates.map((coordinate: LatLngExpression) => marker(coordinate, {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      }));
    }
  }

}
