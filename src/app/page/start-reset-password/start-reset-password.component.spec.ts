import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartResetPasswordComponent } from './start-reset-password.component';

describe('StartResetPasswordComponent', () => {
  let component: StartResetPasswordComponent;
  let fixture: ComponentFixture<StartResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
