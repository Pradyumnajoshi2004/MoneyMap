import { TestBed } from '@angular/core/testing';

import { CalcuateExpanceService } from './calcuate-expance.service';

describe('CalcuateExpanceService', () => {
  let service: CalcuateExpanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcuateExpanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
