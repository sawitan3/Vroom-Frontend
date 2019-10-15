import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../../services/car.service';
import {AddCarRequest} from '../../../model/AddCarRequest';
import {Location} from '../../../model/Location';
import {LocationService} from '../../../services/location.service';
import {isNumber} from '../../../validators/is-number';

@Component({
  selector: 'app-create-new-car',
  templateUrl: './create-new-car.component.html',
  styleUrls: ['./create-new-car.component.css']
})
export class CreateNewCarComponent implements OnInit {

  locations: Array<Location>

  createNewCarForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    plate: new FormControl('', [Validators.required]),
    capacity: new FormControl(1, [Validators.required, isNumber, Validators.min(1)]),
    price: new FormControl(1, [Validators.required, isNumber, Validators.min(1)]),
    locationId: new FormControl(1, [Validators.required]),
    availability: new FormControl(true),
    image: new FormControl(null, [Validators.required])
  });

  get type() {return this.createNewCarForm.get('type'); }
  get plate() {return this.createNewCarForm.get('plate'); }
  get capacity() {return this.createNewCarForm.get('capacity'); }
  get availability() {return this.createNewCarForm.get('availability'); }
  get locationId() {return this.createNewCarForm.get('locationId'); }
  get image() {return this.createNewCarForm.get('image'); }
  get price() {return this.createNewCarForm.get('price'); }

  constructor(private carService: CarService, private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe(res => {
      this.locations = res.locations.filter(val => val.current_car_num < val.slot);
      this.createNewCarForm.patchValue({locationId: this.locations[0].id});
    });
  }

  submit() {
    const payload: AddCarRequest = {type: this.type.value, availability: (this.availability.value ? 1 : 0),
      capacity: this.capacity.value, cover_image: this.image.value, location_id: this.locationId.value, plate: this.plate.value,
      price_per_day: this.price.value};
    console.log(payload);
    this.carService.createCar(payload).subscribe(res => window.location.reload(), err => console.log(err));
  }

  onAddFile($event: any) {
    this.createNewCarForm.patchValue({image: $event.target.files[0]});
  }

}
