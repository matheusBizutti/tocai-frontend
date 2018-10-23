import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPartnersComponent } from './signup-partners.component';

describe('SignupPartnersComponent', () => {
  let component: SignupPartnersComponent;
  let fixture: ComponentFixture<SignupPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
