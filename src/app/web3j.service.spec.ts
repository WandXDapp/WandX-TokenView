import { TestBed, inject } from '@angular/core/testing';

import { Web3jService } from './web3j.service';

describe('Web3jService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Web3jService]
    });
  });

  it('should be created', inject([Web3jService], (service: Web3jService) => {
    expect(service).toBeTruthy();
  }));
});
