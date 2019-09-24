import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbCalendar, NgbDate, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {DatetimeService} from '../../services/datetime.service';
import {NgbTime} from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.css']
})
export class DatetimePickerComponent implements OnInit {

  @Output()
  valueChange = new EventEmitter<string>();

  opened = false;

  minDate: NgbDate;
  selectedDate: NgbDate;
  time: NgbTimeStruct;

  selectedDateTime: string;

  constructor(private calendar: DatetimeService)  { }

  ngOnInit() {
    this.minDate = this.calendar.getToday();
    this.selectedDate = this.minDate;
    this.time = {hour: 6, minute: 0, second: 0};
  }

  update() {
    this.selectedDateTime = this.calendar.createDateTime(this.selectedDate, this.time);
    this.valueChange.emit(this.selectedDateTime);
  }
}
