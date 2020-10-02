import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllFlightDetailsComponent } from './view-all-flight-details.component';

describe('ViewAllFlightDetailsComponent', () => {
  let component: ViewAllFlightDetailsComponent;
  let fixture: ComponentFixture<ViewAllFlightDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllFlightDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
