import {Component, Input, OnInit} from '@angular/core';
import {AdminResponse} from '../../../model/AdminListResponse';
import {ModalService} from '../../../services/modal.service';
import {DeleteAdminComponent} from '../../../component/delete-admin/delete-admin.component';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  @Input()
  admins: AdminResponse[];

  constructor(private modal: ModalService) { }

  ngOnInit() {
  }

  delete(admin: AdminResponse) {
    this.modal.open(DeleteAdminComponent, 'Delete admin', {admin});
  }

}
