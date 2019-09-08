import { Component, OnInit } from '@angular/core';
import {Route} from '../../model/routes';
import {RoutingService} from '../../services/routing.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public route = Route;

  constructor(private router: RoutingService) { }

  ngOnInit() {
  }

  onClick(destination: Route) {
    this.router.goTo(destination);
  }

}
