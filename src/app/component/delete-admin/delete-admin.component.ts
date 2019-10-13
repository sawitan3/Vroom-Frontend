import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {UserService} from '../../services/user.service';
import {AdminResponse} from '../../model/AdminListResponse';

@Component({
  selector: 'app-delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrls: ['./delete-admin.component.css']
})
export class DeleteAdminComponent implements OnInit {

  @Input()
  admin: AdminResponse;

  constructor(private modalService: ModalService,
              private userService: UserService) { }

  ngOnInit() {
  }

  yes() {
    this.userService.deleteAdmin(this.admin.id).subscribe(() => window.location.reload());
  }

  no() {
    this.modalService.close();
  }

}
