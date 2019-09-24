import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsAdminComponent } from './bookings-admin.component';

describe('BookingsAdminComponent', () => {
  let component: BookingsAdminComponent;
  let fixture: ComponentFixture<BookingsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
