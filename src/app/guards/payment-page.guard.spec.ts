import { TestBed, async, inject } from '@angular/core/testing';

import { PaymentPageGuard } from './payment-page.guard';

describe('PaymentPageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentPageGuard]
    });
  });

  it('should ...', inject([PaymentPageGuard], (guard: PaymentPageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
