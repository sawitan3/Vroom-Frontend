import { TestBed, async, inject } from '@angular/core/testing';

import { PaymentCallbackGuard } from './payment-callback.guard';

describe('PaymentCallbackGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentCallbackGuard]
    });
  });

  it('should ...', inject([PaymentCallbackGuard], (guard: PaymentCallbackGuard) => {
    expect(guard).toBeTruthy();
  }));
});
