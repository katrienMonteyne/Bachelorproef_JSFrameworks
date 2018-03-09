import { TestBed, inject } from '@angular/core/testing';

import { StestService } from './stest.service';

describe('StestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StestService]
    });
  });

  it('should be created', inject([StestService], (service: StestService) => {
    expect(service).toBeTruthy();
  }));
});
