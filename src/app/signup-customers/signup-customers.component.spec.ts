import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCustomersComponent } from './signup-customers.component';

describe('SignupCustomersComponent', () => {
  let component: SignupCustomersComponent;
  let fixture: ComponentFixture<SignupCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
