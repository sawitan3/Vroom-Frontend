import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car.service';
import {Car} from '../../model/Car';
import {RoutingService} from '../../services/routing.service';
import {StorageService} from '../../services/storage.service';
import {Route} from '../../model/routes';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  cars: Array<Car>;
  isLoggedIn: boolean;
  route = Route;

  constructor(private carService: CarService,
              private router: RoutingService,
              private storage: StorageService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.carService.getCars().subscribe(res => {
      this.cars = res.cars;
      this.cars.map((x: Car) => x.image_path = `data:image/jpeg;base64,${x.image_path}`);
    });

    this.isLoggedIn = this.storage.getItem('isLoggedIn') || false;
    this.storage.watchStorage().subscribe(() => {
      this.isLoggedIn = this.storage.getItem('isLoggedIn') || false;
    });
  }

  linkClick(destination: Route) {
    this.router.goTo(destination);
  }

  getImagePath(imgPath: any) {
    return this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + imgPath);
  }
}
