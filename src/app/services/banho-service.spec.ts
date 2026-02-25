import { TestBed } from '@angular/core/testing';

import { BanhoService } from './banho-service';

describe('BanhoService', () => {
  let service: BanhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
