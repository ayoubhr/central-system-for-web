import { TestBed } from '@angular/core/testing';

import { ChargepointService } from './chargepoint.service';

describe('ChargepointService', () => {
  let service: ChargepointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargepointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
