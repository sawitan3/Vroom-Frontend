import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {RoutingService} from './routing.service';
import {Route} from '../model/routes';
import {ModalService} from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private router: RoutingService,
              private modal: ModalService) { }

  pay(bookingId: number): void {
    const currentWindow = window.open(`${environment.baseUrl}/payment/create/?booking_id=${bookingId}`, '_blank',
        'location,width=570,height=570');
    const currentTimer = setInterval(() => {
      if (currentWindow.location.hostname === window.location.hostname) {
        currentWindow.close();
        clearInterval(currentTimer);
        this.modal.message('Payment Successful', 'Payment is successfully done, redirecting.');
        setTimeout(() => {
          this.router.goTo(Route.BookingList);
          this.modal.close();
          }, 3000);
      }
    }, 5000);
  }
}
