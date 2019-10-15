import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHistoryPageComponent } from './booking-history-page.component';

describe('BookingHistoryPageComponent', () => {
  let component: BookingHistoryPageComponent;
  let fixture: ComponentFixture<BookingHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
