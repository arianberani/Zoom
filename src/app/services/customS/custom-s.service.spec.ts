import { TestBed } from '@angular/core/testing';

import { CustomSService } from './custom-s.service';

describe('CustomSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomSService = TestBed.get(CustomSService);
    expect(service).toBeTruthy();
  });
});
