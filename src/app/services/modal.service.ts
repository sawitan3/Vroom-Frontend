import { Injectable } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalWrapperComponent} from '../component/modal-wrapper/modal-wrapper.component';
import {GenericMessageComponent} from '../component/modal-wrapper/generic-message/generic-message.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  public open(component: any, title: string, componentInput: {[key: string]: any} = null) {
    this.modal = this.modalService.open(ModalWrapperComponent);
    this.modal.componentInstance.title = title;
    this.modal.componentInstance.childComponent = component;
    this.modal.componentInstance.componentInput = componentInput;
  }

  public message(title: string, message: string) {
    this.open(GenericMessageComponent, title, {message});
  }

  public close() {
    if (this.modal) {
      this.modal.close();
    }
  }
}
