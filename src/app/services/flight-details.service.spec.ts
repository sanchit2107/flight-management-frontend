import { TestBed } from '@angular/core/testing';

import { FlightDetailsService } from './flight-details.service';

describe('FlightDetailsService', () => {
  let service: FlightDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
