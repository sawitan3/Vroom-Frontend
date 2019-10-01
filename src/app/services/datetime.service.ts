import { Injectable } from '@angular/core';
import {NgbCalendar, NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor(private ngbCalendar: NgbCalendar) { }

  getToday() {
    return this.ngbCalendar.getToday();
  }

  convertDate(date: NgbDateStruct): string {
    return `${date.year}-${date.month}-${date.day}`;
  }

  convertTime(time: NgbTimeStruct): string {
    return `${time.hour}:${time.minute}:00`;
  }

  createDateTime(date: NgbDateStruct, time: NgbTimeStruct) {
    return `${this.convertDate(date)} ${this.convertTime(time)}`;
  }

  getInitialData() {
    return this.createDateTime(this.getToday(), {hour: 6, minute: 0, second: 0});
  }

  fromString(datetime: string): {date: NgbDateStruct, time: NgbTimeStruct} {
    const split = datetime.split(' ');
    const datesplit = split[0].split('-');
    const date: NgbDateStruct = {year: +datesplit[0], month: +datesplit[1], day: +datesplit[2] };
    const timesplit = split[1].split(':');
    const time: NgbTimeStruct = {hour: +timesplit[0], minute: +timesplit[1], second: +timesplit[2]};
    return {date, time};
  }
}
