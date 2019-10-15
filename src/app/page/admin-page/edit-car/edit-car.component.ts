import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../../services/car.service';
import {AddCarRequest} from '../../../model/AddCarRequest';
import {EditCarRequest} from '../../../model/EditCarRequest';
import {LocationService} from '../../../services/location.service';
import {Location} from '../../../model/Location';
import {isNumber} from '../../../validators/is-number';


@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  locations: Array<Location>

  @Input()
  carId: number;

  editCarForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    plate: new FormControl('', [Validators.required]),
    capacity: new FormControl(1, [Validators.required, isNumber, Validators.min(1)]),
    locationId: new FormControl(1, [Validators.required]),
    price: new FormControl(1, [Validators.required, isNumber, Validators.min(1)]),
    availability: new FormControl(true),
    image: new FormControl(null)
  });

  get type() {return this.editCarForm.get('type'); }
  get plate() {return this.editCarForm.get('plate'); }
  get capacity() {return this.editCarForm.get('capacity'); }
  get availability() {return this.editCarForm.get('availability'); }
  get locationId() {return this.editCarForm.get('locationId'); }
  get image() {return this.editCarForm.get('image'); }
  get price() {return this.editCarForm.get('price'); }

  constructor(private carService: CarService, private locationService: LocationService) { }

  ngOnInit() {
    this.carService.getCar(this.carId).subscribe(res => {
      this.editCarForm.patchValue({
        type: res.type,
        plate: res.plate,
        capacity: res.capacity,
        availability: !!res.availability,
        locationId: res.location_id,
        price: res.price_per_day
      });
      this.locationService.getLocations().subscribe(result => {
        this.locations = result.locations.filter(loc => loc.current_car_num <= loc.slot);
      });
    });
  }

  onAddFile($event: any) {
    this.editCarForm.patchValue({image: $event.target.files[0]});
  }

  submit() {
    const payload: EditCarRequest = {type: this.type.value, availability: (this.availability.value ? 1 : 0),
      capacity: this.capacity.value, location_id: this.locationId.value, plate: this.plate.value, price_per_day: this.price.value};
    if (this.image.value !== null) {
      payload.cover_image = this.image.value;
    }
    this.carService.editCar(this.carId, payload).subscribe( res => window.location.reload(), err => console.error(err));
  }

}
