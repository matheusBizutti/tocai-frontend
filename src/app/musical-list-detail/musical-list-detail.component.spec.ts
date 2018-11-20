import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalListDetailComponent } from './musical-list-detail.component';

describe('MusicalListDetailComponent', () => {
  let component: MusicalListDetailComponent;
  let fixture: ComponentFixture<MusicalListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicalListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
