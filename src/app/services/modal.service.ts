import { Injectable } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalWrapperComponent} from '../component/modal-wrapper/modal-wrapper.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  public open(component: any, title: string, componentInput: {[key: string]: any} = null) {
    const modal = this.modalService.open(ModalWrapperComponent);
    modal.componentInstance.title = title;
    modal.componentInstance.childComponent = component;
    modal.componentInstance.componentInput = componentInput;
  }
}
