import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVenueComponent } from './add-venue.component';

describe('AddVenueComponent', () => {
  let component: AddVenueComponent;
  let fixture: ComponentFixture<AddVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
