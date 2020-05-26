import { TestBed } from '@angular/core/testing';

import { AboutSService } from './about-s.service';

describe('AboutSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutSService = TestBed.get(AboutSService);
    expect(service).toBeTruthy();
  });
});
