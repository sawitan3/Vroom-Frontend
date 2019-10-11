import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentStatus'
})
export class PaymentStatusPipe implements PipeTransform {

  transform(value: boolean, args?: any): any {
    return `${value ? '' : 'Not '}Done`;
  }

}
