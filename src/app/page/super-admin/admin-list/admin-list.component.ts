import {Component, Input, OnInit} from '@angular/core';
import {AdminResponse} from '../../../model/AdminListResponse';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  @Input()
  admins: AdminResponse[];

  constructor() { }

  ngOnInit() {
  }

}
