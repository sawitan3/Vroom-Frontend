import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbCalendar, NgbDate, NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {DatetimeService} from '../../services/datetime.service';
import {NgbTime} from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.css']
})
export class DatetimePickerComponent implements OnInit {

  @Input()
  dateTime: string = null;

  @Output()
  valueChange = new EventEmitter<string>();

  opened = false;

  minDate: NgbDateStruct;
  selectedDate: NgbDateStruct;
  time: NgbTimeStruct;

  selectedDateTime: string;

  constructor(private calendar: DatetimeService)  { }

  ngOnInit() {
    this.minDate = this.calendar.getToday();
    if (!this.dateTime) {
      this.selectedDate = this.minDate;
      this.time = {hour: 6, minute: 0, second: 0};
    } else {
      const date = this.calendar.fromString(this.dateTime);
      this.selectedDate = date.date;
      this.time = date.time;
    }
  }

  update() {
    this.selectedDateTime = this.calendar.createDateTime(this.selectedDate, this.time);
    this.valueChange.emit(this.selectedDateTime);
  }
}
