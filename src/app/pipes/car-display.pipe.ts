import { Pipe, PipeTransform } from '@angular/core';
import {Car} from '../model/Car';

@Pipe({
  name: 'carDisplay'
})
export class CarDisplayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const car = value as Car;
    return `${car.type} (${car.plate})`;
  }

}
