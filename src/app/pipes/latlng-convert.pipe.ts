import { Pipe, PipeTransform } from '@angular/core';
import {Location} from '../model/Location';

@Pipe({
  name: 'latlngConvert'
})
export class LatlngConvertPipe implements PipeTransform {

  transform(value: Location, args?: any): any {
    return [value.latitude, value.longitude];
  }

}
