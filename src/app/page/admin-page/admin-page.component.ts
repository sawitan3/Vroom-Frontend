import { Component, OnInit } from '@angular/core';
import {Status} from '../../services/customer.service';
import {ModalService} from '../../services/modal.service';
import {CreateNewCarComponent} from './create-new-car/create-new-car.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public status = Status;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  createNewCar() {
    this.modalService.open(CreateNewCarComponent, 'Create new car');
  }

}
