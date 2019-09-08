import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../../services/car.service';
import {AddCarRequest} from '../../../model/AddCarRequest';

@Component({
  selector: 'app-create-new-car',
  templateUrl: './create-new-car.component.html',
  styleUrls: ['./create-new-car.component.css']
})
export class CreateNewCarComponent implements OnInit {

  createNewCarForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    plate: new FormControl('', [Validators.required]),
    capacity: new FormControl(1, [Validators.required, this.isNumber, Validators.min(1)]),
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

  private isNumber(c: AbstractControl) {
    if (isNaN(c.value)) {
      return {notNumber: true};
    }
    return null;
  }

  constructor(private carService: CarService) { }

  ngOnInit() {
  }

  submit() {
    const payload: AddCarRequest = {type: this.type.value, availability: (this.availability.value ? 1 : 0),
      capacity: this.capacity.value, cover_image: this.image.value, location_id: this.locationId.value, plate: this.plate.value}
    console.log(payload);
    this.carService.createCar(payload).subscribe(res => window.location.reload(), err => console.log(err));
  }

  onAddFile($event: any) {
    this.createNewCarForm.patchValue({image: $event.target.files[0]});
  }

}
