import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-generic-message',
  templateUrl: './generic-message.component.html',
  styleUrls: ['./generic-message.component.css']
})
export class GenericMessageComponent implements OnInit {

  @Input()
  message: string;

  constructor() { }

  ngOnInit() {
  }

}
