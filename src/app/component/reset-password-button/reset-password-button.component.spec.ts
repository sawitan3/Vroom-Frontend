import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordButtonComponent } from './reset-password-button.component';

describe('ResetPasswordButtonComponent', () => {
  let component: ResetPasswordButtonComponent;
  let fixture: ComponentFixture<ResetPasswordButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
