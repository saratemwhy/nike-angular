import { TestBed } from '@angular/core/testing';

import { ShoesServiceService } from './shoes-service.service';

describe('ShoesServiceService', () => {
  let service: ShoesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
