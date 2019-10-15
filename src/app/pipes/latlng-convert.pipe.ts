import { Pipe, PipeTransform } from '@angular/core';
import {Location} from '../model/Location';
import {LocationDisplay} from '../model/LocationDisplay';

@Pipe({
  name: 'latlngConvert'
})
export class LatlngConvertPipe implements PipeTransform {

  transform(value: Location, args?: any): LocationDisplay {
    return {location: [value.latitude, value.longitude], address: value.address};
  }

}
