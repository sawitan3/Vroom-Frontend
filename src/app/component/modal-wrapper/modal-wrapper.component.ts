import {Component, ComponentFactoryResolver, Directive, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {hasOwnProperty} from 'tslint/lib/utils';

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

  @Input()
  componentInput: {[key: string]: any};

  @ViewChild(ModalBodyDirective) host: ModalBodyDirective;

  constructor(public activeModal: NgbActiveModal,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.childComponent);
    const viewRef = this.host.viewContainerRef;
    viewRef.clear();
    const component = viewRef.createComponent(factory);
    if (this.componentInput !== null) {
      for (const key in this.componentInput) {
        if (hasOwnProperty(this.componentInput, key)) {
          component.instance[key] = this.componentInput[key];
        }
      }
    }
  }

}
