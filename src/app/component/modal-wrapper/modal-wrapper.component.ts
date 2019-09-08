import {Component, ComponentFactoryResolver, Directive, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Directive({
  selector: '[appModalBody]'
})
export class ModalBodyDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.css']
})
export class ModalWrapperComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  childComponent: any;

  @ViewChild(ModalBodyDirective) host: ModalBodyDirective;

  constructor(public activeModal: NgbActiveModal,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.childComponent);
    const viewRef = this.host.viewContainerRef;
    viewRef.clear();
    viewRef.createComponent(factory);
  }

}
