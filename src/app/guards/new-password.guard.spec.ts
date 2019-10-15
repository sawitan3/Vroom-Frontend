import { TestBed, async, inject } from '@angular/core/testing';

import { NewPasswordGuard } from './new-password.guard';

describe('NewPasswordGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewPasswordGuard]
    });
  });

  it('should ...', inject([NewPasswordGuard], (guard: NewPasswordGuard) => {
    expect(guard).toBeTruthy();
  }));
});
