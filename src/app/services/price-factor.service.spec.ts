import { TestBed } from '@angular/core/testing';

import { PriceFactorService } from './price-factor.service';

describe('PriceFactorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriceFactorService = TestBed.get(PriceFactorService);
    expect(service).toBeTruthy();
  });
});
