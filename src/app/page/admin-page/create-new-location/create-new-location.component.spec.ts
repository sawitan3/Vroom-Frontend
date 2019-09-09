import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewLocationComponent } from './create-new-location.component';

describe('CreateNewLocationComponent', () => {
  let component: CreateNewLocationComponent;
  let fixture: ComponentFixture<CreateNewLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
