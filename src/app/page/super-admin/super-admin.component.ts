import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {AdminResponse} from '../../model/AdminListResponse';
import {Status} from '../../services/customer.service';
import {ModalService} from '../../services/modal.service';
import {CreateNewAdminComponent} from './create-new-admin/create-new-admin.component';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {

  constructor(private userService: UserService, private modalService: ModalService) { }

  private admins: AdminResponse[];

  public status = Status;

  ngOnInit() {
    this.userService.getList().subscribe(x => {
      this.admins = x.admins;
    });
  }

  openModal() {
    this.modalService.open(CreateNewAdminComponent, 'Create new Admin');
  }

}
