import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHistoriesComponent } from './booking-histories.component';

describe('BookingHistoriesComponent', () => {
  let component: BookingHistoriesComponent;
  let fixture: ComponentFixture<BookingHistoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingHistoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
