import { TestBed } from '@angular/core/testing';

import { Loginservice } from './loginservice.service';

describe('Loginservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Loginservice = TestBed.get(Loginservice);
    expect(service).toBeTruthy();
  });
});
