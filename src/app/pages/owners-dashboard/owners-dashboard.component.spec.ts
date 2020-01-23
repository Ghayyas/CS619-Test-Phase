import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersDashboardComponent } from './owners-dashboard.component';

describe('OwnersDashboardComponent', () => {
  let component: OwnersDashboardComponent;
  let fixture: ComponentFixture<OwnersDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
