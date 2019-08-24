import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {AdminResponse} from '../../model/AdminListResponse';
import {Status} from '../../services/customer.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {

  constructor(private userService: UserService) { }

  private admins: AdminResponse[];

  public status = Status;

  ngOnInit() {
    this.userService.getList().subscribe(x => {
      this.admins = x.admins;
    });
  }

}
