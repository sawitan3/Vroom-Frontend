import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCarComponent } from './create-new-car.component';

describe('CreateNewCarComponent', () => {
  let component: CreateNewCarComponent;
  let fixture: ComponentFixture<CreateNewCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
