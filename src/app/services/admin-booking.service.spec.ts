import { TestBed } from '@angular/core/testing';

import { AdminBookingService } from './admin-booking.service';

describe('AdminBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminBookingService = TestBed.get(AdminBookingService);
    expect(service).toBeTruthy();
  });
});
