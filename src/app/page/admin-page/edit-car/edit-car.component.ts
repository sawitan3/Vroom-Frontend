import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../../services/car.service';
import {AddCarRequest} from '../../../model/AddCarRequest';
import {EditCarRequest} from '../../../model/EditCarRequest';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  @Input()
  carId: number;

  editCarForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    plate: new FormControl('', [Validators.required]),
    capacity: new FormControl(1, [Validators.required, this.isNumber, Validators.min(1)]),
    locationId: new FormControl(1, [Validators.required]),
    availability: new FormControl(true),
    image: new FormControl(null)
  });

  get type() {return this.editCarForm.get('type'); }
  get plate() {return this.editCarForm.get('plate'); }
  get capacity() {return this.editCarForm.get('capacity'); }
  get availability() {return this.editCarForm.get('availability'); }
  get locationId() {return this.editCarForm.get('locationId'); }
  get image() {return this.editCarForm.get('image'); }

  private isNumber(c: AbstractControl) {
    if (isNaN(c.value)) {
      return {notNumber: true};
    }
    return null;
  }

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCar(this.carId).subscribe(res => {
      this.editCarForm.patchValue({
        type: res.type,
        plate: res.plate,
        capacity: res.capacity,
        availability: !!res.availability,
        locationId: res.location_id
      });
    });
  }

  onAddFile($event: any) {
    this.editCarForm.patchValue({image: $event.target.files[0]});
  }

  submit() {
    const payload: EditCarRequest = {type: this.type.value, availability: (this.availability.value ? 1 : 0),
      capacity: this.capacity.value, location_id: this.locationId.value, plate: this.plate.value};
    if (this.image.value !== null) {
      payload.cover_image = this.image.value;
    }
    this.carService.editCar(this.carId, payload).subscribe( res => console.log(res), err => console.error(err));
  }

}
