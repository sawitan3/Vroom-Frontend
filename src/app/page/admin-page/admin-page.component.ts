import { Component, OnInit } from '@angular/core';
import {Status} from '../../services/customer.service';
import {ModalService} from '../../services/modal.service';
import {CreateNewCarComponent} from './create-new-car/create-new-car.component';
import {Route} from '../../model/routes';
import {RoutingService} from '../../services/routing.service';
import {CreateNewLocationComponent} from './create-new-location/create-new-location.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public status = Status;
  public route = Route;

  constructor(private modalService: ModalService,
              private router: RoutingService) { }

  ngOnInit() {
  }

  createNewCar() {
    this.modalService.open(CreateNewCarComponent, 'Create new car');
  }

  createNewLocation() {
    this.modalService.open(CreateNewLocationComponent, 'Create New Location');
  }
}
