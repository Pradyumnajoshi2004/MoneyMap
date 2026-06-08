import { TestBed } from '@angular/core/testing';

import { ExpanceService } from './expance.service';

describe('ExpanceService', () => {
  let service: ExpanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
